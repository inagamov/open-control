<template>
  <div v-touch-swipe.right="useGoBack()" class="absolute-top fit bg-white">
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
        :css="state.usePageTransition.value"
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
import { storeToRefs } from 'pinia';
import { useIndexStore } from 'stores/store-index';
import useGoBack from 'src/helpers/useGoBack';

const hasActiveChildPage = ref(false);
const emit = defineEmits(['activated', 'deactivated']);
const state = storeToRefs(useIndexStore());

onActivated(() => {
  emit('activated');
});

onDeactivated(() => {
  emit('deactivated');
});
</script>
