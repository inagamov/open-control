<template>
  <q-scroll-area ref="chatArea" class="full-height" style="background-color: #FFF6F3;" >
    <div class="q-gutter-md q-pa-md bubbles_container">
      <q-chat-message
        key="0000"
        name='Помощник'
        :text="['Привет! Я робот Помощник\nЧем могу помочь?']"
        text-color='white'
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
import {watch, ref, toRefs, onBeforeMount, onMounted} from 'vue';
const chatArea = ref(null);
const props = defineProps({
  messages: {
    type: Array,
    default: null,
  },
  user: {
    type: Object,
    default: null
  }
});

const { messages } = toRefs(props)

watch(() => messages, () => {
  const scrollTarget = chatArea.value?.getScrollTarget();
  const duration = 300;
  chatArea?.value?.setScrollPosition('vertical',scrollTarget.scrollHeight, duration);
}, {
  immediate: true,
  deep: true,
});

onMounted(() => {
  const scrollTarget = chatArea.value?.getScrollTarget();
  const duration = 300;
  chatArea?.value?.setScrollPosition('vertical',scrollTarget.scrollHeight, duration);
})

</script>

<style scoped lang="scss">
/*
 * chat
 */
::v-deep(.q-message-text--received) {
  background: #f3715f;
  color: #FFFFFF;
  border-radius: 15px 15px 15px 0;
}

::v-deep(.q-message-text--sent) {
  background: #FFFFFF;
  color: $accent;
  border-radius: 15px 15px 0 15px;
}

::v-deep(.bubbles_container) {
  font-size: 16px;
  bottom: 0;
  left: 0;
}

</style>
