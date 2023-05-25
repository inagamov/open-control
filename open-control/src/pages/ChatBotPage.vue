<template>
  <page style="z-index: 3000">
    <page-body>
      <div class="chat">
        <div class="column no-wrap full-height">
          <!-- Header -->
          <div
            class="row no-wrap justify-center relative-position q-py-sm blur"
          >
            <q-btn
              :to="router.back()"
              flat
              no-caps
              color="accent"
              class="absolute-left q-pl-sm"
            >
              <template #default>
                <q-icon name="arrow_back_ios_new" />
                <div class="q-pl-sm">Назад</div>
              </template>
            </q-btn>

            <div class="text-center column justify-center">
              <div class="interlocutor_name">Помощник</div>
              <div class="text-grey" style="line-height: 14px">online</div>
            </div>

            <div class="absolute-right q-pr-sm column justify-center">
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" fill="white" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L9.96803 8.55382C10.5635 8.20193 11.2582 8 12 8C12.7418 8 13.4365 8.20193 14.032 8.55382L16.2929 6.29289C16.6834 5.90237 17.3166 5.90237 17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711L15.4462 9.96803C15.7981 10.5635 16 11.2582 16 12C16 12.7418 15.7981 13.4365 15.4462 14.032L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L14.032 15.4462C13.4365 15.7981 12.7418 16 12 16C11.2582 16 10.5635 15.7981 9.96803 15.4462L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L8.55382 14.032C8.20193 13.4365 8 12.7418 8 12C8 11.2582 8.20193 10.5635 8.55382 9.96803L6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289Z"
                  fill="var(--q-accent)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10Z"
                  fill="var(--q-accent)"
                />
              </svg>
            </div>
          </div>

          <q-separator />

          <!-- Body -->
          <q-scroll-area style="height: 100%">
            <q-card-section>
              <q-chat-message :text="['hey, how are you?']" sent />
              <q-chat-message :text="['doing fine, how r you?']" />
            </q-card-section>
          </q-scroll-area>

          <q-separator />

          <!-- Footer  -->
          <div class="row no-wrap q-px-sm q-py-sm blur">
            <q-btn flat color="secondary" round class="footer__button">
              <template #default>
                <svg
                  width="28px"
                  height="28px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="style=linear">
                    <g id="attach">
                      <path
                        id="vector"
                        d="M20.6475 10.6158L11.8855 19.3778C9.93289 21.3304 6.76706 21.3304 4.81444 19.3778C2.86182 17.4252 2.86182 14.2594 4.81444 12.3068L12.9462 4.17503C14.313 2.80819 16.5291 2.80819 17.8959 4.17503C19.2628 5.54186 19.2628 7.75794 17.8959 9.12478L10.1024 16.9183C9.32132 17.6994 8.05499 17.6994 7.27394 16.9183C6.4929 16.1373 6.49289 14.8709 7.27394 14.0899L14.468 6.89585"
                        stroke="var(--q-secondary)"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </g>
                  </g>
                </svg>
              </template>
            </q-btn>

            <q-input
              v-model="text"
              dense
              borderless
              :placeholder="placeholder"
              class="q-px-sm"
              style="margin: auto 0; width: 100%"
            />

            <q-btn
              :flat="!text?.length"
              :unelevated="!!text?.length"
              :color="!text?.length ? 'secondary' : 'accent'"
              round
              class="footer__button"
            >
              <template #default>
                <transition appear enter-active-class="animated zoomIn">
                  <svg
                    v-if="!text?.length"
                    width="28px"
                    height="28px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="9"
                      y="3"
                      width="6"
                      height="11"
                      rx="3"
                      fill-opacity="0.24"
                      stroke="var(--q-secondary)"
                      stroke-width="1.2"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.4 11C5.4 12.7504 6.09536 14.4292 7.3331 15.6669C8.57084 16.9046 10.2496 17.6 12 17.6C13.7504 17.6 15.4292 16.9046 16.6669 15.6669C17.9046 14.4292 18.6 12.7504 18.6 11"
                      stroke="var(--q-secondary)"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 21V19"
                      stroke="var(--q-secondary)"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </transition>

                <transition appear enter-active-class="animated zoomIn">
                  <q-icon v-if="!!text?.length" name="north" />
                </transition>
              </template>
            </q-btn>
          </div>
        </div>
      </div>
    </page-body>
  </page>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const text = ref();
const placeholder = ref('');

const requestExamples = [
  'Как получить лицензию',
  'Как связаться с поддержкой',
  'Как изменить пароль',
  'Как настроить профиль',
  'Как добавить новый аккаунт',
  'Как удалить данные',
  'Как оплатить подписку',
  'Как получить скидку',
  'Как создать новый проект',
  'Как добавить участника в проект',
  'Как изменить настройки безопасности',
  'Как настроить уведомления',
  'Как использовать API',
  'Как создать бэкап данных',
  'Как восстановить данные из бэкапа',
  'Как установить приложение',
];

function animate() {
  let sentenceIndex = 0;
  let i = 0;
  let isForward = true;

  setInterval(() => {
    const sentence = requestExamples[sentenceIndex];
    if (isForward) {
      placeholder.value = sentence.slice(0, i + 1);
      i++;
      if (i === sentence.length) {
        setTimeout(() => {
          isForward = false;
        }, 2000); // Wait 2 seconds before deleting
      }
    } else {
      placeholder.value = sentence.slice(0, i);
      i--;
      if (i === -1) {
        isForward = true;
        i++;
        sentenceIndex = (sentenceIndex + 1) % requestExamples.length;
      }
    }
  }, 100);
}

onBeforeMount(() => {
  animate();
});
</script>

<style scoped lang="scss">
::v-deep(.q-field__control) {
  border-radius: 20px;
  height: 33px;
  background: #f2f2f2;
  padding: 0 12px !important;
}

.footer__button {
  width: 33px;
  min-width: 33px;
  max-width: 33px;
  height: 33px;
  min-height: 33px;
  max-height: 33px;
}

/*
 * chat
 */
::v-deep(.q-message-text--received) {
  background: $secondary;
  color: $secondary;
  border-radius: 15px 15px 15px 0;
}

::v-deep(.q-message-text--sent) {
  background: $accent;
  color: $accent;
  border-radius: 15px 15px 0 15px;
}
</style>

<style scoped>
.chat {
  width: 100vw;
  height: 100vh;
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
}

.blur {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(6px);
}

.interlocutor_name {
  font-weight: 600;
  font-size: 16px;
}
</style>
