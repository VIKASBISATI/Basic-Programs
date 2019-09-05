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
                console.log("result-------", result);
            }).catch((err) => {
                console.log("errrr", err);
            })
        Controller.getAllUsersChats()
            .then((result) => {
                console.log('alllllllllllllllllll', result)
                this.setState({
                    message: result
                })
                console.log("result-------", result);
            }).catch((err) => {
                console.log("errrr", err);
            })
        const sen = localStorage.getItem('Sender');
        socket.on(sen, function (res) {
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
    handleMenuClick = (event) => {
        var Receiver = event.target.textContent;
        this.setState({
            Receiver: Receiver
        })
    }
    handleSubmit = () => {
        var Sender = localStorage.getItem('Sender');
        console.log('asdfaf',this.state.msg)
        this.setState({
            Sender: Sender
        })
        var data = {
            message: this.state.msg,
            sender: Sender,
            receiver: this.state.Receiver

        }
        console.log(data);
        socket.emit('NewMessage', data);
        this.setState({
            msg: ''
        })
    }
    render() {
        // const msgArray = this.state.msgArr.map((key) => {
        //     return (
        //         <div>
        //             {
        //                 key.sender === this.state.Receiver ?
        //                     (<div>
        //                         <label>{key.sender}</label>
        //                         <div>{key.message}</div>
        //                     </div>) :
        //                     (<div>
        //                         <label>{key.sender}</label>
        //                         <div>{key.message}</div>
        //                     </div>)
        //             }
        //         </div>
        //     )
        // })
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
            return (
                <div>
                    {
                        key.sender === this.state.Sender ?
                            (<div>
                                <label>{key.sender}</label>
                                <div>{key.message}</div>
                            </div>) :
                            (<div>
                                <label>{key.sender}</label>
                                <div>{key.message}</div>
                            </div>)
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
                        <Button color="secondary" style={{ marginLeft: "950px" }} onClick={this.handleLogout}>Logout</Button>
                    </Toolbar>
                </AppBar>
                <div>
                    <Card className="FirstCard">
                        {allUsersLogin}
                    </Card>
                    <Card className="SecondCard">
                        {localStorage.getItem('Sender')}
                        {msgDisplay}
                    </Card>
                </div>
                <form className="DashBoard">
                    <div>
                        <TextField
                            id="filled-full-width"
                            label="Message"
                            style={{ margin: 8 }}
                            onChange={this.handleMessage}
                            placeholder="Type your message"
                            fullWidth
                            margin="normal"
                            variant="filled"
                        />
                        <Button variant="contained" color="secondary" className="DashButon" onClick={this.handleSubmit}  >
                            Send
                    </Button>
                    </div>
                </form>
            </div>
        )
    }
}