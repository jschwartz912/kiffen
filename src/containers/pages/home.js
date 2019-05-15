import React, { Component } from 'react';
import styled from 'styled-components';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <HomeContainer>
                <div>header</div>
                <div>text</div>
                <div>call to action</div>
            </HomeContainer>
        );
    }
}

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export default Home;
