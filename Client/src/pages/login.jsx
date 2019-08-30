import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Card } from '@material-ui/core';
import Button from '@material-ui/core/Button';
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
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
    handleCreateAccout = () => {
        this.props.history.push('/register')
    }
    handleForgotPassword = () => {
        this.props.history.push('/forgotPassword')
    }
    render() {
        return (
            <div className="loginCss">
                <h1>LOGIN</h1>
                <form >
                    <Card className="card">
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
                            <Button variant="contained" color="primary" className="text">
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