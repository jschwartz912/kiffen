import React, { Component } from 'react';
import ReactSignupLoginComponent from 'react-signup-login-component';
import styled from 'styled-components';


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'Login'
        };
    }
        
    render() {
        const FormStyles = {
            mainWrapper: { backgroundColor: 'blue' },
            mainTitle: { color: 'red' },
            flipper: { transition: '0.1s' },
            signup: {
              wrapper: { backgroundColor: 'yellow' },
              inputWrapper: { backgroundColor: 'AliceBlue' },
              buttonsWrapper: { backgroundColor: 'Aqua' },
              input: { backgroundColor: 'LavenderBlush' },
              recoverPassword: {},
              button: { backgroundColor: 'LightCoral' },
            },
            login: {
              wrapper: { backgroundColor: 'yellow' },
              inputWrapper: { backgroundColor: 'AliceBlue' },
              buttonsWrapper: { backgroundColor: 'Aqua' },
              input: { backgroundColor: 'LavenderBlush' },
              recoverPasswordWrapper: { backgroundColor: 'MediumBlue' },
              recoverPasswordButton: { backgroundColor: 'OldLace ' },
              button: { backgroundColor: 'LightCoral' },
            },
            recoverPassword: {
              wrapper: { backgroundColor: 'yellow' },
              inputWrapper: { backgroundColor: 'AliceBlue' },
              buttonsWrapper: { backgroundColor: 'Aqua' },
              input: { backgroundColor: 'LavenderBlush' },
              button: { backgroundColor: 'LightCoral' },
            },
        };

        return (
            <FormContainer>
                <ReactSignupLoginComponent
                    title={this.state.page}
                    styles={FormStyles}
                    handleSignup={this.signupWasClickedCallback}
                    handleLogin={this.loginWasClickedCallback}
                    handleRecoverPassword={this.recoverPasswordWasClickedCallback}
                    {...this.props} 
                />
            </FormContainer>
        );
    }

    signupWasClickedCallback = (data) => {
        console.log(data);
        alert('Signup callback, see log on the console to see the data.');
    };

    loginWasClickedCallback = (data) => {
        console.log(data);
        alert('Login callback, see log on the console to see the data.');
    };
    
    recoverPasswordWasClickedCallback = (data) => {
        console.log(data);
        alert('Recover password callback, see log on the console to see the data.');
    };
}

const FormContainer = styled.div`
    position: relative;
    z-index: 10;
`;

export default LoginForm;