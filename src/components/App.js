import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import  Header  from './Header';
import  Footer from './Footer';

class App extends Component {
    render() {
        return (
            <Router> 
                
                <Header/>
                {/* <Route exact={true} path="/" component={} /> */}
                {/* <Route path="/info" component={Projects} /> */}
                
                <Footer />
            </Router>
        );
    }
}

export default App;