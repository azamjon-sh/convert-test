<script setup>
import { RouterView } from 'vue-router'
import AppHeader from "@/components/AppHeader.vue";
</script>

<template>
  <v-app>
    <AppHeader/>
    <main>
      <RouterView />
    </main>
  </v-app>
</template>

<style scoped>

</style>
