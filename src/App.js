import React, { Component } from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { connect } from 'react-redux';

import SiteNav from './containers/navbar/sitenav';
import NavMenu from './containers/navbar/navmenu';
import Home from './containers/pages/home';

import { faBars, faTimesCircle, faMap, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faTimesCircle, faMap, faUser, faPlus);

class App extends Component {
    render() {
        const { isNavToggled } = this.props;

        const siteMarginShift = isNavToggled ? '400px' : '0px';

        return (
            <div>
                <NavMenu />
                <SiteContainer style={{ marginLeft: siteMarginShift }}>
                    <SiteNav onNavToggle="true" />
                    <Home />
                </SiteContainer>
            </div>
        );
    }
}

const SiteContainer = styled.div``;

function mapStateToProps({ isNavToggled }) {
    return { isNavToggled };
}

export default connect(
    mapStateToProps,
    null
)(App);
