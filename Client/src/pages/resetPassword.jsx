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
import Button from '@material-ui/core/Button';
import Controller from '../controllers/userController';
import { Card } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
export default class ResetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            confirmpassword: ""
        }
    }
    snackbarClose = (e) => {
        this.setState({ openSnackBar: false });
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
        if (this.state.password === "") {
            this.setState({
                openSnackBar: true,
                SnackBarMessage: 'Password Cannot Be Empty'
            })

        }
        else if (this.state.confirmpassword === "") {
            this.setState({
                openSnackBar: true,
                SnackBarMessage: 'ConfirmPassword Cannot Be Empty'
            })
        }
        else {
            Controller.resetPassword(this.state.password, this.state.confirmpassword)
        }
    }
    render() {
        return (
            <div>
                <form style={{ marginTop: "157px" }}>
                    <h1 className="heading">RESET PASSWORD</h1>
                    <Card className="resetcard">
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