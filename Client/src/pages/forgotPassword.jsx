import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Card } from '@material-ui/core';
import Controller from '../controllers/userController';
export default class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        }
    }
    handleChangeMail = (event) => {
        var email = event.target.value;
        this.setState({
            email: email
        })
        console.log('data---',email)
    }
    handleSubmit = () => {
        
            Controller.forgotPassword(this.state.email);
    }
    render() {
        return (
            <div className="forgotPasswordCss">
                <form style={{ marginTop: '158px' }}>
                    <h1>FORGOT PASSWORD</h1>
                    <Card className="forgotcard">
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