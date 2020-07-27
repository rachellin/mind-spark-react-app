import React from 'react';
import styled from 'styled-components';
import 'remixicon/fonts/remixicon.css';
import { Link } from 'react-router-dom';

// export class Links extends React.Component {
//     render () {
//         return (
//             <div className="sidebar-right-links">
//                 <StyledLink href="/">link</StyledLink>
//             </div>
//         );
//     }
// }

// const StyledLink = styled.a`
//     display: block;
// `;

export class Menu extends React.Component {

    render () {
        return (
            <StyledMenu>
                {/* <a onClick={() => this.props.onClick(0)}><i class="ri-user-line"></i></a>
                <a href=""><i class="ri-home-2-line"></i></a>
                <a href=""><i class="ri-compass-3-line"></i></a>
                <a onClick={() => this.props.onClick(1)}><i class="ri-notification-2-line"></i></a>
                <a href=""><i class="ri-pencil-line"></i></a>
                <a href=""><i class="ri-cloud-line"></i></a> */}

                <Link onClick={() => this.props.onClick(0)}>
                    <i class="ri-user-line"></i>
                </Link>
                <Link to="/">
                    <i class="ri-home-2-line"></i>
                </Link>
                <Link to="/explore">
                    <i class="ri-compass-3-line"></i>
                </Link> 
                <Link onClick={() => this.props.onClick(1)}>
                    <i class="ri-notification-2-line"></i>
                </Link>
                <Link to="/create">
                    <i class="ri-pencil-line"></i>
                </Link>
                <Link to="/clouds">
                    <i class="ri-cloud-line"></i>
                </Link>
            </StyledMenu>
        );
    }
}

const StyledMenu = styled.div`

    a {
        display: block;
        margin: 2rem;
        width: 2.5rem;
        height: 2.5rem;
        line-height: 2.5rem;
        border-radius: 50%;
        text-align: center;
    }
`;

