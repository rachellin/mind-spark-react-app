import React from 'react';
import styled from 'styled-components';
import 'remixicon/fonts/remixicon.css';

export class NotifsTab extends React.Component {

    render () {
        return (
            <StyledNotifs>
               <Notif></Notif>
            </StyledNotifs>
        );
    }
}

const Notif = () => {
    return (
        <div>Sharon commented on your article: "Love this!"</div>
    );
}

const StyledNotifs = styled.div`
    border-bottom: 1px solid var(--border);
`;



