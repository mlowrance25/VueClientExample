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
         :sort-by="sortBy"
         :sort-desc="sortDesc"
         @update:sort-by="updateSort('by', $event)"
         @update:sort-desc="updateSort('desc', $event)"
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
         if ('sortBy' in this.$route.query) {
            this.sortBy = this.$route.query.sortBy;
        }
          if ('desc' in this.$route.query) {
            this.sortDesc = this.$route.query.desc == "true" ? true : false;
        }
    },
    data() {
        return {
            sortBy: '',
            sortDesc: '',
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
        },
        updateSort(eventName, event){
            if(eventName == 'by' && event.length > 0){
                this.sortBy = event;
            }
            if(eventName == 'desc'){
                 this.sortDesc = event;
            }
            this.$router.push({ query: Object.assign({}, this.$route.query, { sortBy: this.sortBy,desc: this.sortDesc }) });
          
        },
    }
}
</script>
<style scoped>

</style>
