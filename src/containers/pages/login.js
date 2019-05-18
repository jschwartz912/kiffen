import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import styled from 'styled-components';

import fire from '../../fire';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'Login'
        };
    }
        
    render() {
        return (
            // <FormContainer>
                <FormContainer>
                    <MDBRow>
                        <MDBCol md="6">
                            <form onSubmit={(e) => this.loginWasClickedCallback(e)}>
                                <p className="h5 text-center mb-4">Sign in</p>
                                <div className="grey-text">
                                <MDBInput
                                    label="Type your email"
                                    icon="envelope"
                                    group
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    label="Type your password"
                                    icon="lock"
                                    group
                                    type="password"
                                    validate
                                />
                                </div>
                                <div className="text-center">
                                <MDBBtn type="submit">Login</MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </FormContainer>
            // </FormContainer>
        );
    }

    loginWasClickedCallback = (e) => {
        e.preventDefault();
        
        console.log('LOGIN');
        // alert('Login callback, see log on the console to see the data.');
        // const {username, password} = data;
        // console.log(username);
        // console.log(password);

        // fire.database().ref('messages').push( 'TEST' );
    };
    
}

const FormContainer = styled(MDBContainer)`

    .row {
        justify-content: center;
    }

    .form-group {
        width: 100%;
        text-align: left;

    }
`;

export default LoginForm;