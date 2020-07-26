import React from 'react';
import styled from 'styled-components';
import 'remixicon/fonts/remixicon.css';

import { UserLinks } from './userLinks';

export class Content extends React.Component {
    render () {
        return (
            <StyledContent open={this.props.open}>
                <h1>title</h1>
                <button onClick={this.props.onClick}><i class="ri-arrow-right-s-line"></i></button>
                <UserLinks/>
            </StyledContent>
        );
    }
}

// const StyledContent = styled.div`
//     position: relative;
//     width: ${(props) => props.open ? '15rem' : '0'};
//     padding: ${(props) => props.open ? '2rem' : '0'};
//     border-left: 2px solid var(--teal);

//         float: right;
//     }
// `;

const StyledContent = styled.div`
    position: relative;
    width: 15rem;
    padding: 2rem;
    border-left: 2px solid var(--teal);

    h1 {
        display: inline-block;
    }

    button {
        float:right;
        font-size: 1.5rem;
    }
`;

