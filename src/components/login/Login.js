import React, { Component} from 'react';
import { Textarea, Container, Button, Icon } from 'react-materialize';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
    this.myChangeHandler = this.myChangeHandler.bind(this)
  }
  myChangeHandler(event) {
    console.log(event.target.name);
    this.setState({[event.target.name]: event.target.value});
  }
  render() {
    return (
        <form method="POST" action="/login">
        <Container>
            <center><h1>Login {this.state.email}</h1></center>
            <Textarea className=" grey-text text-lighten-3" 
                name="email" 
                validate
                error="Wrong Email ser"
                success="Great"
                label="Enter username" 
                onChange={this.myChangeHandler}/>
            <Textarea password  className=" grey-text text-lighten-3" label="Enter Password" onChange={this.myChangeHandler}/>
            <Button className="right" type="submit" waves="light">
                Submit
                <Icon right>
                send
                </Icon>
            </Button>
        </Container>  
        

        </form>
    );
  }
}

export default Login;