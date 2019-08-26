import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import  Header  from './Header';
import  Footer from './Footer';
import Login from './login/Login';
import Register from './register/Register';
class App extends Component {
    render() {
        return (
            <Router> 
                
                <Header/>
                <Route exact={true} path="/" component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />

                
                <Footer />
            </Router>
        );
    }
}

export default App;