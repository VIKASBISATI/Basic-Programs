import authServices from '../services/userServices'
import axios from 'axios';
var controller={
    register(fname,lname,email,password){
        var data={
            firstName:fname,
            lastName:lname,
            email:email,
            password:password
        }
        return axios.post('http://localhost:4000'+authServices.register,data).then(response=>{
            console.log("response  ==> "+JSON.stringify(response));
            
            return response;
        })
        .catch(error=>{
            console.log("error "+error);
            
            return error;
        })
    }

}
export default controller;
