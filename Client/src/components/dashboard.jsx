import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
export default class Dashboard extends React.Component {
    // constructor(props) {
    //     super(props);

    // }
    render() {
        return (
            <div >
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">
                            ChatApp DashBoard
                        </Typography>
                        <Button color="secondary" style={{ marginLeft: "950px" }}>Logout</Button>
                    </Toolbar>
                </AppBar>
                <div>
                    <Card className="FirstCard">

                    </Card>
                    <Card className="SecondCard">
                    </Card>
                </div>
                <form className="DashBoard">
                    <div>
                        <TextField
                            id="filled-full-width"
                            label="Message"
                            style={{ margin: 8 }}
                            placeholder="Type your message"
                            fullWidth
                            margin="normal"
                            variant="filled"
                        />
                        <Button variant="contained" color="secondary" className="DashButon">
                            Send
                    </Button>
                    </div>
                </form>
            </div>
        )
    }
}