<template>
    <div>
        <v-row>
            <v-col>
          <v-card outlined>
                <v-card-title>
                  <span class="account-exp3">Customer Details</span>
                </v-card-title>
         <v-data-table
         :headers="headers"
         :items="customers"
         :search="search"
         item-key="FirstName"
         class="elevation-1"

        > 
         <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search"
          class="mx-4"
        ></v-text-field>
      </template>
         </v-data-table>
          </v-card>
           </v-col>
        </v-row>
    </div>
</template>
<script>
import appService from '../app.service.js'

export default {
    mounted(){
        this.getCustomer();
    },
    data() {
        return {
            search : '',
            customers: [
            ],
             headers: [
                 {text: 'First Name ',value: 'FirstName'},
                { text: 'Last Name', value: 'LastName' },
                { text: 'Company Name', value: 'Company',  filterable: false },
                
                ],
            }
    },
    methods:{
        getCustomer(){
           appService.getCustomers().then(response =>{
               this.customers = response.data;
           })
        }
    }
}
</script>
<style scoped>

</style>
