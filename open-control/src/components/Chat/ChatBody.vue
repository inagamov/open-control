<template>
  <q-scroll-area ref="chatArea" class="full-height chat_background">
    <div class="q-gutter-md q-pa-md bubbles_container">
      <q-chat-message
        key="0000"
        name="Помощник"
        :text="['Привет! Я робот Помощник\nЧем могу помочь?']"
        text-color="white"
      />
      <q-chat-message
        :key="key"
        v-for="(message, key) in props.messages"
        :name="message.from === 'me' ? user?.first_name : 'Справка'"
        :text="[message.text]"
        :sent="message.from === 'me'"
        :bg-color="message.from === 'me' ? 'white' : '#f3715f'"
        :text-color="message.from === 'me' ? '#122B27' : 'white'"
      />
    </div>
  </q-scroll-area>
</template>

<script setup>
import { watch, ref, toRefs, onBeforeMount, onMounted } from 'vue';
const chatArea = ref(null);
const props = defineProps({
  messages: {
    type: Array,
    default: null,
  },
  user: {
    type: Object,
    default: null,
  },
});

const { messages } = toRefs(props);

watch(
  () => messages,
  () => {
    const scrollTarget = chatArea.value?.getScrollTarget();
    const duration = 300;
    chatArea?.value?.setScrollPosition(
      'vertical',
      scrollTarget.scrollHeight,
      duration
    );
  },
  {
    immediate: true,
    deep: true,
  }
);

onMounted(() => {
  const scrollTarget = chatArea.value?.getScrollTarget();
  const duration = 300;
  chatArea?.value?.setScrollPosition(
    'vertical',
    scrollTarget.scrollHeight,
    duration
  );
});
</script>

<style scoped lang="scss">
/*
 * chat
 */
::v-deep(.q-message-text--received) {
  background: linear-gradient(136.37deg, #f75d47 19.2%, #e13925 75.6%);
  animation: gradient 1s ease-in-out infinite alternate;
  color: white;
  border-radius: 15px 15px 15px 0;
}

::v-deep(.q-message-text--sent) {
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(2px);
  color: $accent;
  border-radius: 15px 15px 0 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 10px 20px !important;
}

::v-deep(.bubbles_container) {
  font-size: 14px;
  bottom: 0;
  left: 0;
}

.chat_background {
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    url('/pattern.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>
