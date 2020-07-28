import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import { Menu } from './menu';
import { Tab } from './tab';

// export class SidebarRight extends React.Component {

//     constructor (props) {
//         super(props);
//         this.state = {
//             open: false,
//             tab: 'user'
//         }
//     }

//     openTab (i) {
//         console.log(i);
//         i == 0 ? this.setState({ tab: 'user'}) : this.setState({ tab: 'notifs' });
//         this.setState({ open: !this.state.open });
//     }

//     closeTab () {
//         this.setState({ open: false });
//     }

//     componentDidMount() {
//         this.setState({ elementHeight: this.divRef.clientHeight });
//     }

//     render () {
//         return (
//             <StyledSidebar 
//                 ref={element => this.divRef = element}
//                 open={this.props.open}
//             >
//                 <Menu onClick={(i) => this.openTab(i)}/>
//                 <Tab 
//                     open={this.state.open} 
//                     tab={this.state.tab}
//                     onClick={() => this.closeTab()}
//                 />
//             </StyledSidebar>
//         );
//     }
// }

class SidebarRight extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            open: false,
            tab: '',
            previousTab: ''
        }
    }

    componentDidUpdate (prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.setState({ open: false });
        }
    }

    openTab (i) {
        i == 0 ? this.setState({ tab: 'user'}) : this.setState({ tab: 'notifs' });
        if (!this.state.open && (this.state.tab == this.state.previousTab)) {
            this.setState({ open: !this.state.open });
        } 
    }

    closeTab () {
        this.setState({ 
            open: false,
            previousTab: this.state.tab
        });
    }

    componentDidMount() {
        this.setState({ elementHeight: this.divRef.clientHeight });
    }

    render () {
        return (
            <StyledSidebar 
                ref={element => this.divRef = element}
                open={this.state.open}
            >
                <Menu onClick={(i) => this.openTab(i)}/>
                <Tab 
                    open={this.state.open} 
                    tab={this.state.tab}
                    onClick={() => this.closeTab()}
                />
            </StyledSidebar>
        );
    }
}

const StyledSidebar = styled.div`
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    right: ${(props) => props.open ? "0" : "-15rem"};
    background: #f6f6f6;
    border-radius: 4rem 0 0 4rem;
    display: flex;
    height: 29rem;
`;

export default withRouter(SidebarRight);

// const StyledSidebar = styled.div`
//     position: fixed;
//     top: 50%;
//     transform: translateY(-50%);
//     right: 0;
//     background: #f6f6f6;
//     border-radius: 4rem 0 0 4rem;
//     display: flex;
// `;