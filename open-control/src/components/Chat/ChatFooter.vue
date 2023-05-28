<template>
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
      @click="() => { $emit('send', text); text = ''}"
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
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';

const placeholder = ref('Сообщение');
const text = ref(null);
const props = defineProps({
  placeholders: {
    type: Array,
    default: null,
  },
});

defineEmits(['send']);

function animate() {
  let sentenceIndex = 0;
  let i = 0;
  let isForward = true;
  setInterval(() => {
    const sentence = props.placeholders[sentenceIndex];
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
        sentenceIndex = (sentenceIndex + 1) % props.placeholders.length;
      }
    }
  }, 100);
}

onBeforeMount  (() => {
  if (props.placeholders) {
    animate();
  }
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
</style>
