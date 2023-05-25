<template>
  <div class="chat">
    <div class="column no-wrap full-height">
      <slot name="header" />

      <q-separator />

      <slot name="body" />

      <q-separator />

      <slot name="footer" />
    </div>
  </div>
</template>

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
</style>
