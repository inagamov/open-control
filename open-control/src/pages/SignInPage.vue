<template>
  <page>
    <page-body>
      <div class="full-height column justify-end bg-tint">
        <div
          class="row no-wrap justify-center full-width"
          style="overflow: hidden; height: 75vw"
        >
          <transition-group
            appear
            enter-active-class="animated slideInUp"
            leave-active-class="animated slideOutDown"
          >
            <img
              v-if="slide === slides.vasyly.value"
              :src="slides.vasyly.src"
              key="vasyly"
            />
            <img
              v-if="slide === slides.maksim.value"
              :src="slides.maksim.src"
              key="maksim"
            />
          </transition-group>
        </div>

        <form
          @submit.prevent="submit()"
          class="bg-white shadow-4 q-px-lg"
          style="
            border-radius: 40px 40px 0 0;
            padding-bottom: env(safe-area-inset-bottom);
          "
        >
          <!-- Title -->
          <div class="text-h4" style="padding-bottom: 0; padding-top: 24px">
            Добро пожаловать
          </div>
          <div class="text-grey" style="font-size: 16px">
            в платформу для проверок бизнеса
          </div>

          <!-- Email -->
          <q-input
            v-model="form.login"
            outlined
            label="Логин"
            type="email"
            color="accent"
            clearable
            tabindex="1"
            class="q-mt-lg"
          >
            <template #prepend>
              <q-icon name="alternate_email" />
            </template>
          </q-input>

          <!-- Password -->
          <q-input
            v-model="form.password"
            outlined
            label="Пароль"
            color="accent"
            type="password"
            clearable
            tabindex="2"
            class="q-mt-md"
          >
            <template #prepend>
              <q-icon name="password" />
            </template>
          </q-input>

          <!-- Footer -->
          <q-btn
            class="sign_in-btn q-mt-lg"
            :disable="!form?.login || !form?.password"
            :loading="state.loading?.value"
            flat
            no-caps
            text-color="white"
            type="submit"
          >
            <template #default>
              <div>Войти</div>
              <svg
                style="width: 31px; height: 8px; margin-left: 8px"
                width="31"
                height="8"
                viewBox="0 0 31 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5L30 4.5V3.5L0 3.5L0 4.5Z"
                  fill="white"
                />
              </svg>
            </template>
          </q-btn>

          <div class="row no-wrap justify-between text-grey">
            <q-separator style="margin: auto 0; width: 40%" />

            <div class="q-py-lg">или</div>

            <q-separator style="margin: auto 0; width: 40%" />
          </div>

          <q-card
            flat
            bordered
            v-ripple
            style="border-radius: 20px"
            class="full-width q-hoverable q-mb-lg"
          >
            <q-card-section class="q-pa-sm row no-wrap">
              <q-img
                src="https://free-png.ru/wp-content/uploads/2021/11/free-png.ru-497.png"
                alt="Гос Услуги"
                style="width: 44px"
              />

              <div style="margin: auto 0; font-weight: 500" class="q-pl-sm">
                Войти через «Гос услуги»
              </div>
            </q-card-section>
          </q-card>
        </form>
      </div>
    </page-body>
  </page>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import { useAuthStore } from 'stores/store-user.js';
import { storeToRefs } from 'pinia';
import { ROUTE_PATHS } from 'src/constants/paths';
import { useRouter } from 'vue-router';
const { login } = useAuthStore();

const state = storeToRefs(useAuthStore());

const router = useRouter();

/*
 * auth
 */
const form = ref({
  login: '',
  password: '',
});

const submit = async () => {
  await login(form.value.login, form.value.password);
  router.push(ROUTE_PATHS.HOME);
};

/*
 * slides animation
 */
const slides = {
  vasyly: { value: 'vasyly', src: '/public/vasyly.png' },
  maksim: { value: 'maksim', src: '/public/maksim.png' },
};
const slidePrev = ref(slides.vasyly.value);
const slide = ref(slides.vasyly.value);
const sliderAnimationDuration = 7 * 1000;
const sliderAnimationDelay = 300 * 2;

onBeforeMount(() => {
  setInterval(() => {
    slide.value = null;

    setTimeout(() => {
      if (slidePrev.value === slides.vasyly.value) {
        slide.value = slides.maksim.value;
        slidePrev.value = slides.maksim.value;
      } else {
        slide.value = slides.vasyly.value;
        slidePrev.value = slides.vasyly.value;
      }
    }, sliderAnimationDelay);
  }, sliderAnimationDuration);
});
</script>

<style scoped lang="scss">
::v-deep(.sign_in-btn) {
  border-radius: 20px;
  background: linear-gradient(136.37deg, #f75d47 19.2%, #e13925 75.6%);
  animation: gradient 1s ease-in-out infinite alternate;
  width: 100%;
  height: 56px;
  font-size: 18px;
}

@keyframes gradient {
  0% {
    background-position: 0 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

.bg-tint {
  background: $tint;
}

::v-deep(.q-field__control) {
  border-radius: 15px;
}

/* Add box-shadow to v-input on focus */
::v-deep(.q-field--focused) {
  box-shadow: 0px 0px 10px #fcb8ae;
  transition: 0.4s;
  border-radius: 15px;
}

::v-deep(.q-field__focusable-action) {
  color: $accent;
  opacity: 1;
}
</style>
