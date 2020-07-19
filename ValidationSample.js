import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password: '',
        clicked : false,
        validate : false,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleButtonClick = (e) => {
        this.setState({
            clicked: true,
            validate: this.state.password ==='0000' 
        })
        if(!this.state.validate) {
            alert("check your password");
        }
        this.handleFocus();
    }
    handleFocus = () =>{
        this.input.focus();
    }
    render() {
        return (
            <div>
                <input
                    type ="text"
                    name = "password"
                    value = {this.state.password}
                    onChange = {this.handleChange}
                    ref={(ref) => this.input=ref}
                    className = {this.state.clicked ?
                        (this.state.validate ? 'success' : 'failure')
                        : ''
                    }
                />
                <button
                    ref = {this.input}
                    onClick = {this.handleButtonClick}
                >Validate</button>
            </div>
        );
    }
}

export default ValidationSample;