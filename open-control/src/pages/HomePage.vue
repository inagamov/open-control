<template>
  <page>
    <page-body>
      <div class="container">
        <company-selector />
        <quick-actions />
      </div>
    </page-body>

    <page-footer />
  </page>
</template>

<script setup>
import CompanySelector from 'components/CompanySelector.vue';
import QuickActions from 'components/QuickActions.vue';
</script>
