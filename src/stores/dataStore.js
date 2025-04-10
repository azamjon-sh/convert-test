import {defineStore} from 'pinia'
import axios from "axios";

export const useDataStore = defineStore('data', {
    state: () => ({
        courses: null,
        loading: false,
        currency: 'USD',
        currencyList:['USD', 'RUB', 'EUR']
    }),

    actions: {
         getCurrency() {
            this.loading = true;
            axios.get('https://status.neuralgeneration.com/api/currency').then((res)=>{
                this.courses = res.data
                this.loading = false;
            })
        },
        getCourse (direct, reverse = ''){
            let currency = reverse ? reverse:this.currency
            const directKey = `${direct.toLowerCase()}-${currency.toLowerCase()}`
            if (this.courses[directKey]) {
                return this.courses[directKey]
            }
            return null
        }
    },
})