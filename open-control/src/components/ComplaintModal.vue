<template>
  <q-dialog v-model="showModal" @hide="$emit('hide')">
    <q-card flat class="q-dialog__card">
      <q-card-section
        class="q-pa-lg column no-wrap justify-between"
        style="height: 100%"
      >
        <!-- Write complaint -->
        <q-editor
          v-model="complaint"
          min-height="20rem"
          max-height="20rem"
          toolbar-text-color="grey"
          toolbar-toggle-color="black"
        />

        <!-- Send button -->
        <q-btn
          class="q-btn__submit q-mt-lg"
          label="Отправить"
          no-caps
          unelevated
          text-color="white"
          @click="
            $q.notify({
              message: 'Жалоба отправлена',
              icon: 'o_schedule',
              position: 'top',
            });
            $emit('send');
            router.push(ROUTE_PATHS.MEETINGS);
          "
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
import { ROUTE_PATHS } from 'src/constants/paths';

defineEmits(['hide', 'send']);

const $q = useQuasar();
const router = useRouter();

/*
 * display
 */
const props = defineProps({
  isShown: { type: Boolean },
});
const showModal = ref(false);

watch(
  () => props.isShown,
  () => {
    showModal.value = props.isShown;
  }
);

/*
 * complaint
 */
const complaint = ref('');
</script>
