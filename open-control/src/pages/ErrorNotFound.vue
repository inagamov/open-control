<template>
  <PageComponent>
    <PageBody>
      <div class="text-accent text-center absolute-center">
        <div>
          <div style="font-size: 20vh">404</div>
          <div style="opacity: 0.4; font-size: 3vh">Что-то пошло не так...</div>

          <q-btn
            class="q-mt-md q-px-xl q-py-md"
            color="accent"
            unelevated
            :to="ROUTE_PATHS.HOME"
            no-caps
          >
            <div style="font-size: 16px">На главную</div>
          </q-btn>
        </div>
      </div>
    </PageBody>
  </PageComponent>
</template>

<script setup lang="ts">
import { ROUTE_PATHS } from 'src/constants/paths';
import PageBody from 'components/Page/PageBody.vue';
import PageComponent from 'components/Page/PageComponent.vue';
</script>

<style scoped>
::v-deep(.q-btn) {
  border-radius: 20px;
}
</style>
