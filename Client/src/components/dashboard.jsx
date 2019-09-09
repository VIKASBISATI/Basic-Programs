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
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import RadioGroup from '@material-ui/core/RadioGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import Controller from '../controllers/userController';
import io from 'socket.io-client';
// import { GridListTile } from '@material-ui/core';
const socket = io.connect('http://localhost:4000');
export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allUsers: [],
            msg: '',
            Sender: '',
            Receiver: '',
            msgArr: [],
            message: [],
            msgDisplay: ''
        }
    }
    componentDidMount() {
        Controller.getAllUsers()
            .then((result) => {
                this.setState({
                    allUsers: result
                })
            }).catch((err) => {
                console.log("errrr", err);
            })
        Controller.getAllUsersChats()
            .then((result) => {
                this.setState({
                    message: result
                })
            }).catch((err) => {
                console.log("errrr", err);
            })
        // const sen = localStorage.getItem('Sender');
        socket.on('Message', (result) => {
            const message = this.state.message;
            message.push(result);
            this.setState({ message: message });
        })
    }
    handleLogout = () => {
        this.props.history.push('/login')
    }
    handleMessage = (event) => {
        var msg = event.target.value;
        this.setState({
            msg: msg
        })
    }
    handleMenuClick = (key, event) => {
        this.setState({ anchorEl: null });
        let Receiver = event.target.textContent;
        this.setState({ Receiver: Receiver });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const Sender = localStorage.getItem('Sender');
        this.setState({
            Sender: Sender
        })
        const data = {
            messageDb: this.state.msg,
            from: Sender,
            to: this.state.Receiver
        }
        console.log("data----------",data);
        socket.emit('FrontEndMessage', data);
        this.setState({
            msg: '',
            anchorEl: null
        })
    }
    handleEnter = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.handleSubmit(e);
        }
    }
    render() {

        const msgArray = this.state.msgArr.map((key) => {
            const senddd = localStorage.getItem('Sender');
            return (
                <div >
                    {key.from === senddd ? (
                        key.from === this.state.Receiver ?
                            (
                                <div className="SenderCss">
                                    <div>{key.messageDb}</div>
                                </div>) : (null)
                    ) : (null)}
                    {key.from === this.state.Receiver ? (
                        <div className="ReceiverCss">
                            <div>{key.messageDb} </div>
                        </div>
                    ) : (null)
                    }
                </div>
            )
        })
        const allUsersLogin = this.state.allUsers.map((key) => {
            if (key.email !== localStorage.getItem('Sender')) {
                return (
                    <div>
                        <MenuItem onClick={(event)=>this.handleMenuClick(key, event)}>{key.email}</MenuItem>
                    </div>
                )
            }
            else {
                return true;
            }
        })
        const msgDisplay = this.state.message.map((key) => {
            const s = localStorage.getItem('Sender');
            return (
                <div>
                    {
                        key.from === s ?
                            (<div className="ReceiverCss">
                                <div> {key.messageDb}</div>
                            </div>)
                            : <div className='SenderCss'>
                                <div>{key.messageDb}</div>
                            </div>
                    }
                </div>
            )
        })
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">
                            ChatApp DashBoard
                        </Typography>
                        <p style={{ marginLeft: "627px" }}>{localStorage.getItem('Sender')}</p>
                        <Button color="secondary" style={{ marginRight: "1804px" }} onClick={this.handleLogout}>Logout</Button>
                    </Toolbar>
                </AppBar>
                <div>
                    <Card className="FirstCard">
                        {allUsersLogin}
                    </Card>
                    {/* <Card className="SecondCard"> */}
                    <div className="SecondCard">
                        {localStorage.getItem('Sender')}
                        <div>{msgArray}</div>
                        <div>{msgDisplay}</div>
                    </div>
                    {/* </Card> */}
                </div>
                <form className="DashBoard">
                    <div>
                        <TextField
                            id="filled-full-width"
                            label="Message"
                            style={{ margin: 8 }}
                            onChange={this.handleMessage}
                            value={this.state.msg}
                            onKeyPress={this.handleEnter}
                            placeholder="Type your message"
                            fullWidth
                            margin="normal"
                            variant="filled"
                        />
                        <Button variant="contained"
                            color="secondary"
                            className="DashButon"
                            onClick={this.handleSubmit}  >
                            Send
                    </Button>
                    </div>
                </form>
            </div>
        )
    }
}