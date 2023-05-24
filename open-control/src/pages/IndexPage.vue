<template>
  <q-page class="container">
    <!-- Company -->
    <CompanySelector />

    <!-- Services -->
    <ServicesMenu />

    <!-- Notifications -->
  </q-page>
</template>

<script setup>
import CompanySelector from 'components/CompanySelector.vue';
import ServicesMenu from 'components/ServicesMenu.vue';
</script>
