import React from 'react';
import styled from 'styled-components';

class SidebarLeft extends React.Component {
    render () {
        return (
            <StyledSidebar>
                <img src="/logo.svg" alt="logo"/>
            </StyledSidebar>
        );
    }
}

const StyledSidebar = styled.div`
    positon: fixed;
    top: 0;
    left: 0;
    width: 6rem;
    padding: 1rem 2rem;
    height: 100vh;
    background: var(--container);

    img {
        width: 3rem;
        display: block;
    }
`;


export default SidebarLeft;