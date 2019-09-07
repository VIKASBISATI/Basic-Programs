/******************************************************************************
* @Purpose : CHATAPP
* @file : routes.js
* @overview : To give a call to the 
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 26/09/2019
******************************************************************************/
import authServices from '../services/userServices';
import axios from 'axios';
var controller = {
    register(firstName, lastName, email, password) {
        var data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }
        console.log(data);
        return axios.post(authServices.register, data).then(response => {
            console.log("response  ==> " + JSON.stringify(response));
            if (response.status === 200) {
                console.log("register Success")
            }
        })
            .catch(error => {
                console.log("register failed " + error);
                return error;
            })
    },
    login(email, password) {
        var emailData = {
            email: email,
            password: password
        }
        return axios.post(authServices.login, emailData).then(response => {
            if (response.status === 200) {
                if(response.data===true){
                console.log("login success");
                return response;
                }
                else{
                    return false;
                }
            }
        })
            .catch(error => {
                // this.props.history.push('/dashboard')
                console.log("login failed " + error);
                return error;
            })
    },
    forgotPassword(email) {
        var forgotData = {
            email: email
        }
        console.log(forgotData.email)
        return axios.post(authServices.forgotPassowrd, forgotData).then(response => {
            if (response.status === 200) {
                console.log(response)
                console.log("forgot Successessfully!!!!! ")
            }
        })
            .catch(error => {
                console.log("forgot failed " + error);
                return error;
            })
    },
    resetPassword(password, confirmPassword) {
        var resetData = {
            password: password,
            confirmpassword: confirmPassword
        }
        return axios.post(authServices.resetPassword, resetData).then(response => {
            if (response.status === 200) {
                console.log("reset Successessfully!!!!! ")
            }
        })
            .catch(error => {
                console.log("reset failed " + error);
                return error;
            })
    },
    getAllUsers() {

        return axios.get(authServices.getAllUsers).then(response => {
            if (response.status === 200) {
                console.log('enteredddddd')
                console.log(response.data);
                return response.data;
            }
        })
            .catch(err => {
                console.log(err);
            })
    },
    getAllUsersChats() {
        console.log('enteredddddd')
        return axios.get(authServices.getAllUsersChats).then((response) => {
            if (response.status === 200) {
                console.log(response.data);
                return response.data;
            }
        })
            .catch((err) => {
                console.log(err);
            })
    }
}
export default controller;