import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

class NavMenu extends Component {
    render() {
        const { isNavToggled } = this.props;
        return (
            <MenuContainer style={{ display: isNavToggled ? 'inline-block' : 'none' }}>
                <ItemContainer />
            </MenuContainer>
        );
    }
}

const MenuContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 400px;
    background: #1f2833;
    border-right: 2px solid #45a29e;
`;

const ItemContainer = styled.div`
    margin-top: 80px;
    border-top: 2px solid #45a29e;
`;

function mapStateToProps({ isNavToggled }) {
    return { isNavToggled };
}

export default connect(
    mapStateToProps,
    null
)(NavMenu);
