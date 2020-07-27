import React from 'react';
import styled from 'styled-components';
import 'remixicon/fonts/remixicon.css';

export class NotifsTab extends React.Component {

    renderNotifs (i) {
        return (
            <Notif>
                notification {i}
            </Notif>
        )
    }

    generateNotifs (i) {
        let notifs = [];
        for (let a = 0; a < i; a++) {
            notifs.push(this.renderNotifs(a)) 
        }
        return notifs;
    }

    render () {
        return (
            <NotifContainer>
               {this.generateNotifs(8)}
            </NotifContainer>
        );
    }
}

// const Notif = () => {
//     return (
//         <div>Sharon commented on your article: "Love this!"</div>
//     );
// }

const Notif = styled.div`
    border-bottom: 1px solid var(--border);
    padding: 1rem 0;
`;

const NotifContainer = styled.div`
    height: 24rem;
    overflow-y: scroll;
`;



