import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleNavMenu } from '../../actions';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SiteNav extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { isNavToggled } = this.props;

        return (
            <Navbar>
                <NavToggle>
                    <NavButton
                        className="burger"
                        style={{display: isNavToggled ? 'none' : 'initial'}}
                        icon='bars'
                        onClick={() => this.burgerToggle()}
                        size="2x"
                        fixedWidth
                    />
                    <h3>KIFFEN</h3>
                </NavToggle>
                <NavActions>
                    <NavButton icon="map" fixedWidth />
                    <NavButton icon="plus" fixedWidth style={{ marginLeft: '15' }} />
                    <NavButton icon="user" fixedWidth style={{ marginLeft: '15' }} />
                </NavActions>
            </Navbar>
        );
    }

    // Toggle NavMenu
    burgerToggle() {
        this.props.toggleNavMenu(!this.props.isNavToggled);
    }
}

const Navbar = styled.nav`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const NavToggle = styled.div`
    h3 {
        display: inline-block;
        vertical-align: super;
    }

    .burger {
        margin-right: 15px;
    }
`;

const NavButton = styled(FontAwesomeIcon)`
    color: #66fcf1;
    cursor: pointer;

    :hover {
        color: #fff;
    }
`;

const NavActions = styled.div`
    display: block;
    justify-content: space-between;
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
)(SiteNav);
