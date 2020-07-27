import React from 'react';
import styled from 'styled-components';
import 'remixicon/fonts/remixicon.css';

import { UserLinks } from './userLinks';
import { NotifsTab } from './notifsTab';

export class Tab extends React.Component {
    render () {
        return (
            <StyledTab open={this.props.open}>
                <h1>{this.props.tab}</h1>
                <button onClick={this.props.onClick}><i class="ri-arrow-right-s-line"></i></button>
                {this.props.tab == 'user' ? <UserLinks/> : <NotifsTab/>}
            </StyledTab>
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

const StyledTab = styled.div`
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

    a {
        display: flex;
        flex-direction: column;
        align-content: middle;
    }
`;

