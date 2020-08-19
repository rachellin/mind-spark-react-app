import React from 'react';
import styled from 'styled-components';

import TabContent from './tabContent';

export class Tab extends React.Component {
    render () {
        return (
            <StyledTab>
                <h2>{this.props.tabTitle}</h2>
                <TabContent/>
            </StyledTab>
        );
    }
}

const StyledTab = styled.div`
    background: var(--teal);
    border-radius: 2rem;
    padding: 1rem 2rem 2rem 2rem;
    height: calc(100% - 3rem * 1);
`;

Tab.defaultProps = {
    tabTitle: 'featured'
}




