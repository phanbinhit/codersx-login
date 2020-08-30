import React, { Component } from 'react';
import logo from '../../../src/logo-coderx.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 

library.add(faUser);

class Header extends Component {
    render() {
        return (
            <header className='headerApp'>
                <div className='back'>
                    <FontAwesomeIcon icon="faUser"/>
                    <span>Go back</span>
                </div> 
                <div className="logo">
                    <img src={logo}></img>
                </div>
                <div className="divSignup"> 
                    <a className="linkSignup">Sign up</a>
                </div>
            </header>
        );
    }
}

export default Header;