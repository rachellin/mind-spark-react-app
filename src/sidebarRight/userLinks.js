import React from 'react';
import styled from 'styled-components';
import 'remixicon/fonts/remixicon.css';
import { Link } from 'react-router-dom';

export class UserLinks extends React.Component {

    render () {
        return (
            <StyledLinks>
                <Link to="/profile">
                   profile
                </Link>
                <Link to="/bolts">
                    bolts
                </Link>
                <Link to="/following">
                    following
                </Link>
                <Link to="/settings">
                    settings
                </Link>
                <Link to="/help">
                    help
                </Link>
            </StyledLinks>
        );
    }
}

const StyledLinks = styled.div`

    a {
        display: block;
    }
`;



