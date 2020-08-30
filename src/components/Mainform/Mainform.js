import React, { Component } from 'react';
import './Mainform.css';

class Mainform extends Component {
    render() {
        return (
            <div className="Mainform">
                <h1>Sign In</h1>
                <form className='form'>
                    <div className="formGroup">
                        <label>Username</label>
                        <input type="text"></input>
                    </div>
                    <div className="formGroup">
                        <label>Password</label>
                        <input type="password"></input>
                    </div>
                    <button type="submit">Signin to Coders-x</button>
                    <div className="formCheck">
                        <input type="checkbox"></input>
                        <label>Keep me signed in</label>
                    </div>
                    <div className="formLink">
                        <a>Fogot username?</a>
                        <a>Fogot password?</a>
                    </div>
                </form>
            </div>
        );
    }
}

export default Mainform;