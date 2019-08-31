import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Card } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Controller from '../controllers/userController';
import Snackbar from '@material-ui/core/Snackbar';
import '../App.css'
export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            openSnackBar:false
        }
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
    handleChangeFirstName = (event) => {
        var firstName = event.target.value;
        this.setState({
            firstName: firstName
        })
    }
    handleChangeLastName = (event) => {
        var lastName = event.target.value;
        this.setState({
            lastName: lastName
        })
    }
    handleLogin = () => {
        this.props.history.push('/login')
    }
    handleSubmit = () => {
        if (this.state.firstName === "") {
            this.setState({
                openSnackBar: true,
                SnackBarMessage: 'First Name Cannot Be Empty'
            })
        }
        else if (!this.state.lastName === "") {
            this.setState({
                openSnackBar: true,
                SnackBarMessage: 'Last Name Cannot Be Empty'
            })
        }
        else if (!this.state.email === "") {
            this.setState({
                openSnackBar: true,
                SnackBarMessage: 'Email Cannot Be Empty'
            })
        }
        else if (this.state.password === "") {
            this.setState({
                openSnackBar: true,
                SnackBarMessage: 'Password Name Cannot Be Empty'
            })
        }
        else {
            Controller.register(this.state.firstName, this.state.lastName, this.state.email, this.state.password)
        }
    }
    render() {
        return (
            <div>
                <h1 className="heading">REGISTER</h1>
                <Card className="card">
                    <form className="registerCss">
                        <div className="text">
                            <TextField
                                required
                                label="FirstName"
                                placeholder="FirstName"
                                variant="outlined"
                                type="text"
                                id=""
                                onChange={this.handleChangeFirstName}
                                value={this.state.firstName}
                            />
                        </div>
                        <div className="text">
                            <TextField
                                required
                                label="LastName"
                                placeholder="LastName"
                                variant="outlined"
                                id=""
                                onChange={this.handleChangeLastName}
                                value={this.state.lastName}
                            />
                        </div>
                        <div className="text">
                            <TextField
                                required
                                label="Email"
                                placeholder="Email"
                                variant="outlined"
                                id=""
                                onChange={this.handleChangeMail}
                                value={this.state.email}
                            />
                        </div>
                        <div className="text">
                            <TextField
                                required
                                id=""
                                label="Password"
                                placeholder="Password"
                                type="password"
                                variant="outlined"
                                onChange={this.handleChangePassword}
                                value={this.state.password}
                            />
                        </div>
                        <div className="button">
                            <Button variant="contained" color="primary" id="regbutton" onClick={this.handleLogin}>
                                Login
                         </Button>
                            <Button variant="contained" color="secondary" className="text" onClick={this.handleSubmit}>
                                Submit
                         </Button>
                        </div>
                    </form>

                </Card>
            </div>
        )
    }
}