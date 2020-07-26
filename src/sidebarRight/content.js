import React from 'react';
import styled from 'styled-components';
import 'remixicon/fonts/remixicon.css';

import { UserLinks } from './userLinks';

export class Content extends React.Component {
    render () {
        return (
            <StyledContent>
                <h1>title</h1>
                <UserLinks/>
            </StyledContent>
        );
    }
}

const StyledContent = styled.div`
    width: 5rem;
    padding: 2rem;
    border-left: 2px solid var(--teal);
`;

