import React, { Component} from 'react';
import {  Navbar, NavItem, Dropdown, Divider, Icon} from 'react-materialize';
import { Link } from 'react-router-dom';

class Header extends Component {
    

   
    render() {
        let logo =   <a href="/"> Document Saver </a>;
        
        return (
            <div className="section black" >
                 <Navbar brand={logo} fixed alignLinks="right">
                    
                    
                    <NavItem className="right" >
                        <Link to="/" >
                            <Icon>
                                add_circle_outline
                            </Icon>
                        </Link>
                    </NavItem>
                    <NavItem  >

                    <Dropdown trigger={<a style={{ float: "right"}}><Icon>
                            person_add
                        </Icon></a> } alignLinks="right">
                    <Link to="/register" >Register </Link>
                    <Link to="/login" >Login </Link>
                    
                </Dropdown>
                </NavItem>
                </Navbar>
             
               
                
            </div>
           
        );
    }
}

export default Header;