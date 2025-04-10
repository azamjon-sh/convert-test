<script setup >
import {computed} from "vue";
import {useDataStore} from "@/stores/dataStore";
const dataStore = useDataStore()

const dataItems = computed(()=>{
  return dataStore.currencyList.filter(el=>el !== dataStore.currency)
})



</script>

<template>
  <v-container>
    <v-table class="w-25 elevation-1">
      <thead>
      <tr>
        <th class="text-left">
          Валюта
        </th>
        <th class="text-left">
          Курс
        </th>
      </tr>
      </thead>
      <tbody>
      <template v-if="!dataStore.loading && dataStore.courses">
        <tr v-for="item in dataItems"
        >
          <td>{{ item }}</td>
          <td>{{ dataStore.getCourse(item) }}</td>
        </tr>
      </template>
      <template v-else-if="dataStore.loading">
        <tr v-for="item in 2"
        >
          <td colspan="2"><v-skeleton-loader

              type="list-item"
          ></v-skeleton-loader></td>
        </tr>
      </template>
      </tbody>
    </v-table>
  </v-container>
</template>

<style scoped>

</style>