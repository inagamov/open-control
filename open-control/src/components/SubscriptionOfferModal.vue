<template>
  <q-dialog v-model="showModal" @hide="$emit('hide')">
    <q-card flat class="q-dialog__card">
      <q-card-section
        class="q-pa-lg column no-wrap justify-between"
        style="height: 100%"
      >
        <div class="text-shine">Pro-доступ</div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106 34">
          <g class="sparkles">
            <path
              style="--duration: 2s; --delay: 0s"
              d="M2.5740361 5.33344622s1.1875777-6.20179466 2.24320232 0c0 0 5.9378885 1.05562462 0 2.11124925 0 0-1.05562463 6.33374774-2.24320233 0-3.5627331-.6597654-3.29882695-1.31953078 0-2.11124925z"
            />
            <path
              style="--duration: 1s; --delay: 1s"
              d="M33.5173993 29.97263826s1.03464615-5.40315215 1.95433162 0c0 0 5.17323078.91968547 0 1.83937095 0 0-.91968547 5.51811283-1.95433162 0-3.10393847-.57480342-2.8740171-1.14960684 0-1.83937095z"
            />
            <path
              style="--duration: 2.5s; --delay: 1.5s"
              d="M69.03038108 1.71240809s.73779281-3.852918 1.39360864 0c0 0 3.68896404.65581583 0 1.31163166 0 0-.65581583 3.93489497-1.39360864 0-2.21337842-.4098849-2.04942447-.81976979 0-1.31163166z"
            />
            <path
              style="--duration: 3.15s; --delay: 2s"
              d="M99.18160965 12.79394657s1.61168639-8.41658446 3.0442965 0c0 0 8.05843194 1.43261013 0 2.86522025 0 0-1.43261011 8.59566072-3.0442965 0-4.83505916-.89538133-4.47690663-1.79076265 0-2.86522025z"
            />
          </g>
        </svg>

        <div class="text-grey text-center q-pb-sm">
          Получите доступ к эксклюзивным возможностям и расширенной
          функциональности нашего сервиса с помощью Pro-доступа!
        </div>

        <q-btn
          class="q-btn__submit q-mt-lg"
          label="Приобрести"
          no-caps
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          unelevated
          text-color="white"
          icon-right="o_auto_awesome"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, watch } from 'vue';

defineEmits(['hide']);
const props = defineProps({
  isShown: { type: Boolean },
});
const showModal = ref(false);

watch(
  () => props.isShown,
  () => {
    showModal.value = props.isShown;
  }
);
</script>

<style scoped>
svg {
  z-index: 1;
  width: 100%;
  max-width: 40rem;
  height: auto;
}

.sparkles {
  animation: logoReveal 7s infinite ease-in-out;
}

@keyframes logoReveal {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.sparkles path {
  fill: #f75d47;
  transform-origin: 50% 50%;
  transform-box: fill-box;
  animation: sparkle var(--duration) var(--delay) infinite ease-in-out;
}

@keyframes sparkle {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(0);
  }
  70% {
    transform: scale(-1, 0);
  }
  80% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}

.text-shine {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  padding: 12px 48px;
  color: #fff;
  background: linear-gradient(to right, #4d4d4d 0, #fff 10%, #4d4d4d 20%) 0;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 3s infinite linear;
  animation-fill-mode: forwards;
  -webkit-text-size-adjust: none;
  font-weight: 600;
  font-size: 48px;
  text-decoration: none;
  white-space: nowrap;
}
@-moz-keyframes shine {
  0% {
    background-position: 0;
  }
  60% {
    background-position: 320px;
  }
  100% {
    background-position: 320px;
  }
}
@-webkit-keyframes shine {
  0% {
    background-position: 0;
  }
  60% {
    background-position: 320px;
  }
  100% {
    background-position: 320px;
  }
}
@-o-keyframes shine {
  0% {
    background-position: 0;
  }
  60% {
    background-position: 320px;
  }
  100% {
    background-position: 320px;
  }
}
@keyframes shine {
  0% {
    background-position: 0;
  }
  60% {
    background-position: 320px;
  }
  100% {
    background-position: 320px;
  }
}
</style>
