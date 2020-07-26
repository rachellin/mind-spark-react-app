import React from 'react';
import styled from 'styled-components';

import { Menu } from './menu';
import { Content } from './content';

export class SidebarRight extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            open: false
        }
    }

    openContent () {
        this.setState({ open: !this.state.open });
    }

    closeContent () {
        this.setState({ open: false });
    }

    render () {
        return (
            <StyledSidebar open={this.state.open}>
                <Menu onClick={() => this.openContent()}/>
                <Content 
                    open={this.state.open} 
                    onClick={() => this.closeContent()}
                />
            </StyledSidebar>
        );
    }
}

const StyledSidebar = styled.div`
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    right: ${(props) => props.open ? "0" : "-15rem"};
    background: #f6f6f6;
    border-radius: 4rem 0 0 4rem;
    display: flex;
`;

// const StyledSidebar = styled.div`
//     position: fixed;
//     top: 50%;
//     transform: translateY(-50%);
//     right: 0;
//     background: #f6f6f6;
//     border-radius: 4rem 0 0 4rem;
//     display: flex;
// `;