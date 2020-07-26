import React from 'react';
import styled from 'styled-components';

import { Links } from './links';
import { Content } from './content';

export class SidebarRight extends React.Component {
    render () {
        return (
            <StyledSidebar>
                <Links onClick={this.handleClick}/>
                <Content/>
            </StyledSidebar>
        );
    }
}

const StyledSidebar = styled.div`
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    background: #f6f6f6;
    border-radius: 4rem 0 0 4rem;
    display: flex;
    margin-right: -5rem;
`;