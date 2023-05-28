<template>
  <div>
    <div
      class="text-h4"
      style="padding-bottom: 16px"
      :style="user.roles.includes('inspector') ? 'padding-top: 0' : ''"
    >
      Уведомления
    </div>

    <!-- Filters -->
    <div class="row q-mb-md">
      <q-chip
        label="Все"
        class="q-ma-none"
        :class="
          notificationsState.filter.value === 'all'
            ? 'bg-banner text-white'
            : 'bg-grey-2 text-grey'
        "
        clickable
        style="transition: 0.275s"
        @click="changeFilter('all')"
      />
      <q-chip
        label="Непрочитанные"
        class="q-ma-none q-mx-sm"
        :class="
          notificationsState.filter.value === 'unread'
            ? 'bg-banner text-white'
            : 'bg-grey-2 text-grey'
        "
        clickable
        style="transition: 0.275s"
        @click="changeFilter('unread')"
      />

      <q-space />

      <q-btn
        flat
        round
        class="bg-banner"
        size="sm"
        style="
          max-width: 28px;
          max-height: 28px;
          min-width: 28px;
          min-height: 28px;
        "
        @click="markAsRead()"
      >
        <template #default>
          <svg
            width="16px"
            height="16px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Interface / Check_All_Big">
              <path
                id="Vector"
                d="M7 12L11.9497 16.9497L22.5572 6.34326M2.0498 12.0503L6.99955 17M17.606 6.39355L12.3027 11.6969"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </template>
      </q-btn>
    </div>

    <!-- Notification -->
    <div class="column q-gutter-md">
      <div
        v-for="notification in notificationsState.notifications.value.filter(
          (item) =>
            notificationsState.filter.value === 'all' ||
            (notificationsState.filter.value === 'unread' && !item.read_at)
        )"
        :key="notification.id"
        class="row no-wrap"
      >
        <div v-if="!notification.read_at" class="dot bg-banner"></div>

        <div>
          <div v-html="notification.message"></div>

          <div class="text-no-wrap text-grey">
            {{ date.formatDate(notification.created_at, 'DD.MM.YYYY HH:mm') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useNotificationsStore } from 'stores/store-notifications';
import { date } from 'quasar';
import { useAuthStore } from 'stores/store-auth';

const notificationsState = storeToRefs(useNotificationsStore());
const { changeFilter, markAsRead } = useNotificationsStore();

const { user } = storeToRefs(useAuthStore());
</script>

<style scoped>
.dot {
  width: 12px;
  height: 12px;
  border-radius: 100%;
  margin: auto 0;
  margin-right: 8px;
}
</style>
