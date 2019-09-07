/******************************************************************************
* @Purpose : CHATAPP
* @file : routes.js
* @overview : To give a call to the 
* @author : BISATI SAI VENKATA VIKAS
* @version : v8.15.0
* @since : 26/09/2019
******************************************************************************/
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Card } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Controller from '../controllers/userController';
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            openSnackBar: false,
            SnackBarMessage: ""
        }
    }
    snackbarClose = (e) => {
        this.setState({ openSnackBar: false });
    }
    handleChangeMail = (event) => {
        var email = event.target.value;
        this.setState({
            email: email
        })
    }
    handleChangePassword = (event) => {
        var password = event.target.value;
        this.setState({
            password: password
        })
    }
    handleCreateAccout = () => {
        this.props.history.push('/register')
    }
    handleForgotPassword = () => {
        this.props.history.push('/forgotPassword')
    }
    handleSubmit = () => {
        if (this.state.email === "") {
            this.setState({
                openSnackBar: true,
                SnackBarMessage: 'Email Cannot Be Empty'
            })
        }
        else if (this.state.password === "") {
            this.setState({
                openSnackBar: true,
                SnackBarMessage: 'Password Cannot Be Empty'
            })
        }
        else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.email)) {
            this.setState({
                openSnackBar: true,
                SnackBarMessage: 'Email format is wrong'
            })
        }
        else {
            // console.log('first');
            Controller.login(this.state.email, this.state.password).then((res) => {
                console.log('res.data', res.data)
                if (res.data) {
                    this.setState({
                        openSnackBar: true,
                        SnackBarMessage: 'Login Success'
                    })
                    localStorage.setItem('Sender', this.state.email)
                    this.props.history.push('/dashboard');
                }
                else {
                    this.setState({
                        openSnackBar: true,
                        SnackBarMessage: 'Error please try again'
                    })
                    this.setState({
                        email: '',
                        password: ''
                    })
                    return;
                }
            })
                .catch((err) => {
                    console.log(err);
                    this.setState({
                        openSnackBar: true,
                        SnackBarMessage: 'Error please try again'
                    })
                })
        }
    }
    render() {
        return (
            <div className="loginCss">
                <h1>LOGIN</h1>
                <form >
                    <Card className="card">
                        <Snackbar
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            // open={true}
                            open={this.state.openSnackBar}
                            autoHideDuration={6000}
                            onClose={this.snackbarClose}
                            message={<span id="messege-id">{this.state.SnackBarMessage}</span>}
                            action={[
                                <IconButton 
                                    key="close"
                                    arial-label="close"
                                    color="inherit"
                                    onClick={this.snackbarClose}
                                >
                                </IconButton>
                            ]}
                        />
                        <div className="text">
                            <TextField
                                required
                                id=""
                                label="Email"
                                type="email"
                                name="Email"
                                margin="normal"
                                placeholder="Email"
                                variant="outlined"
                                onChange={this.handleChangeMail}
                                value={this.state.email}
                            />
                        </div>
                        <div className="text">
                            <TextField type="password"
                                required
                                id=""
                                label="Password"
                                name="Password"
                                margin="normal"
                                placeholder="Password"
                                variant="outlined"
                                onChange={this.handleChangePassword}
                                value={this.state.password}
                            />
                        </div>
                        <div className="button">
                            <Button variant="contained" color="primary" className="text" onClick={this.handleSubmit}>
                                Submit
                         </Button>
                        </div>
                        <div className="button">
                            <Button variant="contained" color="primary" id="createbutton" className="text" onClick={this.handleCreateAccout}>
                                CreatAccount
                         </Button>
                            <Button variant="contained" color="secondary" className="text" onClick={this.handleForgotPassword}>
                                ForgotPassword
                         </Button>
                        </div>
                    </Card>
                </form>
            </div>
        )
    }
}