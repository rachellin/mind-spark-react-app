import React from 'react';
import styled from 'styled-components';

import { SearchBar } from './searchBar';

class Header extends React.Component {
    render () {
        return (
            <StyledHeader>
                <h1>header title</h1> {/* props needed in the future */}
                <SearchBar/>
            </StyledHeader>
        );
    }
}

const StyledHeader = styled.div`
    positon: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    border-bottom: 1px solid var(--border);
    padding: 1rem;

    img {
        width: 5rem;
    }

    h1 { /* doesnt't work */
        text-align: center;
        display: inline; 
    }
`;


export default Header;