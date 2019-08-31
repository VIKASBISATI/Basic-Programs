import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Controller from '../controllers/userController';
import { Card } from '@material-ui/core';
export default class ResetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            confirmpassword: ""
        }
    }
    handleChangePassword = (event) => {
        var password = event.target.value;
        this.setState({
            password: password
        })
    }
    handleChangeConfirmPassword = (event) => {
        var confirmpassword = event.target.value;
        this.setState({
            confirmpassword: confirmpassword
        })
    }
    handleSubmit = () => {
        Controller.resetPassword(this.state.password,this.state.confirmpassword)
    }
    render() {
        return (
            <div>
                <form style={{ marginTop: "157px" }}>
                    <h1 className="heading">RESET PASSWORD</h1>
                    <Card className="resetcard">

                        <div className="text">
                            <TextField type="password"
                                id=""
                                required
                                label="Password"
                                name="password"
                                placeholder="password"
                                margin="normal"
                                variant="outlined"
                                onChange={this.handleChangePassword}
                                value={this.state.password}
                            />
                        </div>
                        <div className="text">
                            <TextField type="password"
                                id=""
                                required
                                label="ConfirmPassword"
                                name="ConfirmPassword"
                                placeholder="ConfirmPassword"
                                margin="normal"
                                variant="outlined"
                                onChange={this.handleChangeConfirmPassword}
                                value={this.state.confirmpassword}
                            />
                        </div>
                        <div class="button">
                            <Button variant="contained" color="secondary" className="text" onClick={this.handleSubmit}>
                                OK
                         </Button>
                        </div>
                    </Card>
                </form>
            </div>
        )
    }
}