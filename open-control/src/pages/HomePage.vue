<template>
  <PageComponent>
    <PageBody>
      <div class="container">
        <company-selector />
        <quick-actions />
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
</script>
