import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleLoginForm } from '../../actions';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LoginForm from './login';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {isFormToggled} = this.props;

        return (
            <PageContainer>
                {isFormToggled ? <LoginForm/> : 
                    <div>
                        <HomeHeader>HELLO</HomeHeader>

                        <HomeInfo>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu pariatur.
                        </HomeInfo>

                        <CallToAction onClick={() => this.toggleForm()}>
                            <span>GET STARTED</span>
                            <ButtonIcon 
                                className="buttonIcon" 
                                icon="dragon" 
                                
                                fixedWidth
                                >
                            </ButtonIcon>
                        </CallToAction>
                    </div>
                }
                
                {/* <!-- Home Page --> */}
                
            </PageContainer>
        );
    }

    toggleForm = () => {
        if (this.isFormToggled) {
            this.props.toggleLoginForm(false);
        } else {
            this.props.toggleLoginForm(true);
        }
    } 
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 0 auto;
    margin-top: 2em;
    align-items: center;
    justify-content: flex-start;
    color: #C5C6C7;
`;

const HomeHeader = styled.p`
    color: #66fcf1;
    font-size: 12em;
    margin: 0;
`;

const HomeInfo = styled.p`
    font-size: 1.4em;
    line-height: 1.4em;
    letter-spacing: 0.035em;
    margin-top: 1em;
    text-align: center;
`;

const CallToAction = styled.div`
    width: fit-content;
    margin: 0 auto;
    margin-top: 3em;
    background: transparent;
    border: 2px solid #45A29E;
    padding: 1em;
    font-size: 1em;
    font-weight: bold;
    letter-spacing: 0.1em;
    text-align: center;
    :hover {
        color: #fff;
        cursor: pointer;
        border-color: #66FCF1;
    }
`;

const ButtonIcon = styled(FontAwesomeIcon)`
    margin-left: 0.5em;
`;

function mapStateToProps({ isFormToggled }) {
    return { isFormToggled };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ toggleLoginForm }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
