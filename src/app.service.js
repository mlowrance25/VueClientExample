import axios from 'axios';
axios.defaults.baseURL = "http://localhost:3000";

const appService = {
    async getCustomers(){
        try{
            let response = await axios.get(`/customer`);
            return response;
        }catch(err){
            console.log(err);
            return err.response;
        }
    },
};

export default appService