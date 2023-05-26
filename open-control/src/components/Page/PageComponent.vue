<template>
  <div class="absolute-top fit bg-white">
    <div
      v-touch-swipe.right="$q.platform.is.ios ?? useGoBack()"
      class="page-nudger fit"
      :class="
        hasActiveChildPage
          ? // && (!$q.platform.is.ios || ($q.platform.is.ios && !hasActiveChildPage))
            'nudge-left'
          : ''
      "
    >
      <slot />
    </div>

    <router-view v-slot="{ Component }">
      <transition
        appear
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight"
        :css="
          state.usePageTransition.value &&
          (!$q.platform.is.ios ||
            ($q.platform.is.ios && !hasActiveChildPage) ||
            ($q.platform.is.ios && state.allowPageBackTransitionOnIOS.value))
        "
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
import { useQuasar } from 'quasar';
import useGoBack from 'src/helpers/useGoBack';

const hasActiveChildPage = ref(false);
const emit = defineEmits(['activated', 'deactivated']);
const state = storeToRefs(useIndexStore());
const $q = useQuasar();

onActivated(() => {
  emit('activated');
});

onDeactivated(() => {
  emit('deactivated');
  state.allowPageBackTransitionOnIOS.value = false;
});
</script>
