<template>
  <transition
    appear
    leave-active-class="animated leave"
    enter-active-class="animated enter"
  >
    <div v-if="show" class="darken_screen"></div>
  </transition>
</template>

<script setup>
defineProps({
  show: { type: Boolean },
});
</script>

<style scoped>
.darken_screen {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
}

@keyframes appear {
  from {
    background: rgba(0, 0, 0, 0);
    backdrop-filter: blur(0);
  }
  to {
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
  }
}

.enter {
  animation: appear 0.275s ease-in-out;
}

.leave {
  animation: appear 0.275s ease-in-out reverse;
}
</style>
