<template>
  <div class="absolute-top fit bg-white">
    <div
      class="page-nudger fit"
      :class="hasActiveChildPage ? 'nudge-left' : ''"
    >
      <slot />
    </div>

    <router-view v-slot="{ Component }">
      <transition
        appear
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight"
      >
        <keep-alive>
          <component
            :is="Component"
            @activated="hasActiveChildPage = true"
            @deactivated="hasActiveChildPage = false"
          />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { onActivated, onDeactivated, ref } from 'vue';

const hasActiveChildPage = ref(false);

const emit = defineEmits(['activated', 'deactivated']);

onActivated(() => {
  emit('activated');
});

onDeactivated(() => {
  emit('deactivated');
});
</script>
