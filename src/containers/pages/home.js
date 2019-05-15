import React, { Component } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <HomeContainer>
                <div>
                    <HomeHeader>HELLO</HomeHeader>
                </div>
                <div>
                    <HomeInfo>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu pariatur.
                    </HomeInfo>
                </div>
                <div>
                    <CallToAction>
                    GET STARTED
                        <ButtonIcon className="buttonIcon" icon="mouse-pointer" fixedWidth></ButtonIcon>
                    </CallToAction>
                </div>
            </HomeContainer>
        );
    }
}

const HomeContainer = styled.div`
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
    font-size: 14vw;
    margin: 0;
`;

const CallToAction = styled.div`
    background: transparent;
    border: 2px solid #45A29E;
    padding: 1em;
    font-size: 2vw;
    font-weight: bold;
    letter-spacing: 0.1em;
    margin-top: 2em;

    :hover {
        color: #fff;
        cursor: pointer;
        border-color: #66FCF1;
    }
`;

const ButtonIcon = styled(FontAwesomeIcon)`
    margin-left: 0.5em;
`;

const HomeInfo = styled.p`
    font-size: 2.3vw;
    line-height: 1.5em;
    letter-spacing: 0.035em;
    margin-top: 1em;
    text-align: center;
`;

export default Home;
