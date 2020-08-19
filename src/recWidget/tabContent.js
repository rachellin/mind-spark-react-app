import React from 'react';
import styled from 'styled-components';

export default function TabContent () {
    return (
        <StyledPost>
            <h3>title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </StyledPost>
    )
}

const StyledPost = styled.div`
    background: var(--background);
    padding: 2rem;
    border-radius: 2rem;
    height: 25vh;
    overflow: hidden;
`;

