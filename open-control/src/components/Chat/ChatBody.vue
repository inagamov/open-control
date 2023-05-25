<template>
  <q-scroll-area style="height: 100%">
    <q-card-section>
      <q-chat-message :text="['hey, how are you?']" sent />
      <q-chat-message :text="['doing fine, how r you?']" />
    </q-card-section>
  </q-scroll-area>
</template>

<script setup></script>

<style scoped lang="scss">
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
