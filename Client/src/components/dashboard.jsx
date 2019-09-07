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
                console.log('yessss its there', result)
                this.setState({
                    message: result
                })
            }).catch((err) => {
                console.log("errrr", err);
            })
        console.log('message is ', this.state.message)
        const sen = localStorage.getItem('Sender');
        socket.on(sen, (res) => {
            const msgArr = this.state.msgArr;
            console.log('res----------', res);
            msgArr.push(res);
            this.setState({
                msgArr: msgArr
            })
            console.log('Dash board msgArray-----', this.state.msgArr);
        })
    }
    handleLogout = () => {
        this.props.history.push('/login')
    }
    handleMessage = (event) => {
        // console.log("message to reciver-----", event.target.value);
        var msg = event.target.value;
        this.setState({
            msg: msg
        })
    }
    handleMenuClick = (event) => {
        console.log("reciver---------", event.target.textContent);
        var Receiver = event.target.textContent;
        this.setState({
            Receiver: Receiver
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        var Sender = localStorage.getItem('Sender');
        this.setState({
            Sender: Sender
        })
        var data = {
            messageDb: this.state.msg,
            from: Sender,
            to: this.state.Receiver
        }
        console.log("eimiting");
        socket.emit('NewMessage', data);
        this.setState({
            msg: ''
        })
    }
    handleEnter = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.handleSubmit(e);
        }
    }
    render() {
        const allUsersLogin = this.state.allUsers.map((key) => {
            if (key.email !== localStorage.getItem('Sender')) {
                return (
                    <div>
                        <MenuItem onClick={this.handleMenuClick}>{key.email}</MenuItem>
                    </div>
                )
            }
            else {
                return true;
            }
        })
        const msgDisplay = this.state.message.map((key) => {
            console.log('key is hell', key)
            const s = localStorage.getItem('Sender');
            console.log('s is ', s);
            // console.log('After key sender',this.state.Sender)
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
                        <Button color="secondary" style={{ marginRigth: "1804px" }} onClick={this.handleLogout}>Logout</Button>
                    </Toolbar>
                </AppBar>
                <div>
                    <Card className="FirstCard">
                        {allUsersLogin}
                    </Card>
                    {/* <Card className="SecondCard"> */}
                    <div className="SecondCard">
                        {localStorage.getItem('Sender')}
                        {/* {msgArray} */}
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