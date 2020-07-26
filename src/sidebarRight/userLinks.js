import React from 'react';
import styled from 'styled-components';
import 'remixicon/fonts/remixicon.css';

export class UserLinks extends React.Component {

    render () {
        return (
            <StyledLinks>
               <a href="">profile</a>
               <a href="">bolts</a>
               <a href="">following</a>
               <a href="">settings</a>
               <a href="">help</a> 
            </StyledLinks>
        );
    }
}

const StyledLinks = styled.div`

    a {
        display: block;
    }
`;



