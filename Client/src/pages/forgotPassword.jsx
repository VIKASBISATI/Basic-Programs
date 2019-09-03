import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Card } from '@material-ui/core';
import Controller from '../controllers/userController';
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
export default class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
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
        console.log('data---', email)
    }
    handleSubmit = () => {
        if (this.state.email === "") {
            this.setState({
                openSnackBar: true,
                SnackBarMessage: 'Email Cannot Be Empty'
            })
        } else {
            Controller.forgotPassword(this.state.email);
        }
    }
    render() {
        return (
            <div className="forgotPasswordCss">
                <form style={{ marginTop: '158px' }}>
                    <h1>FORGOT PASSWORD</h1>
                    <Card className="forgotcard">
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
                            <Button color="primary" varaint="contained" className="text" onClick={this.handleSubmit}>
                                Submit
                         </Button>
                        </div>
                    </Card>
                </form>
            </div>
        )
    }
}