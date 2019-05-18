import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleNavMenu } from '../../actions';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavMenu extends Component {
    render() {
        const { isNavToggled } = this.props;
        return (
            <MenuContainer style={{ display: isNavToggled ? 'inline-block' : 'none' }}>
                <MenuHeader>
                    <h3>Master Rebate</h3>
                    <NavButton 
                        className='closeBtn'
                        icon='times-circle'                
                        onClick={() => this.menuToggle()}
                        size="2x"
                        fixedWidth>
                    </NavButton>
                </MenuHeader>
                <ItemContainer />
            </MenuContainer>
        );
    }

    // Toggle NavMenu
    menuToggle() {
        this.props.toggleNavMenu(!this.props.isNavToggled);
    }
}

const MenuContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 400px;
    border-right: 2px solid #45a29e;
`;

const MenuHeader = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background: transparent;
`;

const NavButton = styled(FontAwesomeIcon)`
    color: #66fcf1;
    cursor: pointer;

    :hover {
        color: #fff;
    }
`;

const ItemContainer = styled.div`
    border-top: 2px solid #45a29e;
    background: #0B0C10;
    height: 100%;
`;


function mapStateToProps({ isNavToggled }) {
    return { isNavToggled };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ toggleNavMenu }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavMenu);

