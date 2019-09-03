import authServices from '../services/userServices';
import axios from 'axios';
import DashBoard from '../components/dashboard';
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
                new DashBoard(emailData.email);
                console.log("login Successessfully!!!!! ")
            }
        })
            .catch(error => {
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
    }
}
export default controller;