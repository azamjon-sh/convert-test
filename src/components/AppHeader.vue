<script setup>
import {useDataStore} from "@/stores/dataStore";
const dataStore = useDataStore()

dataStore.getCurrency()
</script>

<template>
  <header class="header ">
    <v-container>
      <div class="header__grid d-flex justify-space-between align-center">
        <div class="header__menu d-flex flex-grow-1 ga-6 ">
        <RouterLink class="header__link" to="/">Главная</RouterLink>
        <RouterLink class="header__link" to="/convert">Конвертация</RouterLink>
        </div>
        <div class="header__select" v-if="dataStore.currencyList.length > 0">
        <v-select v-model="dataStore.currency" :items="dataStore.currencyList" variant="outlined" label="Основная валюта" hide-details/>
        </div>
      </div>
    </v-container>
  </header>
</template>

<style scoped>

</style>