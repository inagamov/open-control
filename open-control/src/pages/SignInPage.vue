<template>
  <PageComponent>
    <PageBody>
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
            v-model="form.email"
            outlined
            label="E-mail"
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
            class="q-btn__submit q-btn__push q-mt-lg"
            :disable="!form?.email || !form?.password"
            :loading="authState.loading?.value"
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
            class="full-width q-hoverable q-btn__push q-mb-lg"
            @click="submit()"
          >
            <q-card-section class="q-pa-sm row no-wrap">
              <img
                src="https://free-png.ru/wp-content/uploads/2021/11/free-png.ru-497.png"
                alt="Гос Услуги"
                style="width: 44px"
              />

              <div style="margin: auto 0" class="q-pl-sm">
                Войти через «Гос Услуги»
              </div>
            </q-card-section>
          </q-card>
        </form>
      </div>
    </PageBody>
  </PageComponent>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import { useAuthStore } from 'stores/store-auth.js';
import { storeToRefs } from 'pinia';
import { ROUTE_PATHS } from 'src/constants/paths';
import { useRouter } from 'vue-router';
import PageComponent from 'components/Page/PageComponent.vue';
import PageBody from 'components/Page/PageBody.vue';
const { login } = useAuthStore();

const authState = storeToRefs(useAuthStore());

const router = useRouter();

/*
 * auth
 */
const form = ref({
  email: '',
  password: '',
});

const submit = () => {
  new Promise((resolve, reject) => {
    const response = login(form.value.email, form.value.password);
    resolve(response);
  })
    .then(() => {
      router.push(ROUTE_PATHS.HOME);
    })
    .catch((error) => {
      console.log(error);
    });
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
const sliderAnimationDuration = 10 * 1000;
const sliderAnimationDelay = 500 * 2;

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
