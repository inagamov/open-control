<template>
  <div class="row no-wrap justify-center relative-position q-py-sm blur">
    <q-btn
      flat
      no-caps
      color="accent"
      class="absolute-left q-pl-sm"
      @click="
        state.allowPageBackTransitionOnIOS.value = true;
        router.back();
      "
    >
      <template #default>
        <q-icon name="arrow_back_ios_new" />
        <div class="q-pl-sm">Назад</div>
      </template>
    </q-btn>

    <div class="text-center column justify-center">
      <div class="interlocutor_name"><slot name="interlocutor" /></div>
      <div class="text-grey" style="line-height: 14px">
        <slot name="status" />
      </div>
    </div>

    <div class="absolute-right q-pr-sm column justify-center">
      <slot name="avatar" />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useIndexStore } from 'stores/store-index';

const state = storeToRefs(useIndexStore());
const router = useRouter();
</script>

<style scoped lang="scss">
.interlocutor_name {
  font-weight: 600;
  font-size: 16px;
}
</style>
