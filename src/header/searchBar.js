import React from 'react';
import styled from 'styled-components';

export class SearchBar extends React.Component {
    render () {
        return (
            <StyledSearchBar>
                search bar
            </StyledSearchBar>
        );
    }
}

const StyledSearchBar = styled.div`
    float: right;
    background: var(--background);
    padding: 0.5rem 1rem;
    border-radius: 2rem;
`;


