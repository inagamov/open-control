<template>
  <PageComponent>
    <PageBody>
      <div class="container">
        <CompanySelector v-if="!user.roles.includes('inspector')" />
      </div>
    </PageBody>

    <PageNavbar />
  </PageComponent>
</template>

<script setup>
import CompanySelector from 'components/CompanySelector.vue';
import PageComponent from 'components/Page/PageComponent.vue';
import PageBody from 'components/Page/PageBody.vue';
import PageNavbar from 'components/Page/PageNavbar.vue';
import { storeToRefs } from 'pinia';
import { useAuthStore } from 'stores/store-auth';

const { user } = storeToRefs(useAuthStore());
</script>
