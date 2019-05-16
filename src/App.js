import React, { Component } from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { connect } from 'react-redux';

import SiteNav from './containers/navbar/sitenav';
import NavMenu from './containers/navbar/navmenu';
import Home from './containers/pages/home';

import { faBars, faTimesCircle, faMap, faUser, faPlus, faDragon } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faTimesCircle, faMap, faUser, faPlus, faDragon);

class App extends Component {
    render() {
        const { isNavToggled } = this.props;

        const siteMarginShift = isNavToggled ? '400px' : '0px';

        return (
            <SiteContainer>
                <NavMenu />
                <PageContainer style={{ marginLeft: siteMarginShift }}>
                    <SiteNav onNavToggle="true" />
                    <Home />
                </PageContainer>
            </SiteContainer>
        );
    }
}

const SiteContainer = styled.div`
    height: 100%;
`;

const PageContainer = styled.div`
    height: 100%;
`;

function mapStateToProps({ isNavToggled }) {
    return { isNavToggled };
}

export default connect(
    mapStateToProps,
    null
)(App);
