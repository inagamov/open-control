<template>
  <PageComponent>
    <PageBody>
      <div class="container">
        <div class="row no-wrap justify-between">
          <q-img src="/public/logo.png" style="width: 200px" class="q-mb-lg" />
          <q-img src="/public/mos.png" style="width: 63px" class="q-mb-lg" />
        </div>

        <q-separator class="q-mb-lg" />

        <CompanySelector />
        <QuickActions />
        <Notifications />
      </div>
    </PageBody>

    <PageNavbar />
  </PageComponent>
</template>

<script setup>
import CompanySelector from 'components/CompanySelector.vue';
import QuickActions from 'components/QuickActions.vue';
import PageComponent from 'components/Page/PageComponent.vue';
import PageBody from 'components/Page/PageBody.vue';
import PageNavbar from 'components/Page/PageNavbar.vue';
import Notifications from 'components/NotificationsComponent.vue';
</script>
