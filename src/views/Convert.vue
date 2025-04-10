<script setup lang="ts">
import {ref} from "vue";
import {useDataStore} from "@/stores/dataStore";
const dataStore = useDataStore()

const currencyFrom = ref({
  value: 0,
  currency: "RUB"
})
const currencyTo = ref({
  value: 0,
  currency: "USD"
})

const changeValues = ()=>{
  let story = currencyFrom.value.currency
  currencyFrom.value = {currency: currencyTo.value.currency,value: 0}
  currencyTo.value = {currency: story,value: 0}
}

</script>

<template>
  <v-container>
    <div class="d-flex align-center">
      <div class="convert-select">
      <v-select  v-model="currencyFrom.currency" :items="dataStore.currencyList"
                variant="outlined"
                hide-details/>
      </div>
      <div class="convert-input">
      <v-number-input
          v-model="currencyFrom.value"
          :min="0"
          :precision="2"
          hide-details
          control-variant="hidden"
          @input="currencyTo.value = currencyFrom.value * (dataStore.getCourse(currencyFrom.currency,currencyTo.currency))"
          variant="outlined"
      ></v-number-input>
      </div>
    </div>
    <v-btn class="convert-btn" @click="changeValues">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
        <path fill="currentColor"
              d="M116.24 171.76a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48L74 193.51V48a6 6 0 0 1 12 0v145.51l21.76-21.75a6 6 0 0 1 8.48 0m96-96l-32-32a6 6 0 0 0-8.48 0l-32 32a6 6 0 0 0 8.48 8.48L170 62.49V208a6 6 0 0 0 12 0V62.49l21.76 21.75a6 6 0 0 0 8.48-8.48"/>
      </svg>
    </v-btn>
    <div class="d-flex align-center">
      <div class="convert-select">
      <v-select  v-model="currencyTo.currency" :items="dataStore.currencyList" variant="outlined"
                hide-details/></div>
      <div class="convert-input">
      <v-number-input
          v-model="currencyTo.value"
          :min="0"
          :precision="2"
          control-variant="hidden"
          @update="currencyFrom.value = currencyTo.value * (dataStore.getCourse(currencyTo.currency,currencyFrom.currency))"
          hide-details
          variant="outlined"
      ></v-number-input>
      </div>
    </div>
  </v-container>
</template>

<style scoped>

</style>