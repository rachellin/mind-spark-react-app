import React from 'react';
import styled from 'styled-components';

import { Tab } from './tab';

export default class RecWidget extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            tabs: ['featured', 'who to follow', 'trending'], 
        }
    }
    
    renderTab (i) {
        return (
            <Tab 
                tabTitle={this.state.tabs[i]}
                tabNum={i}
            />
        )
    }

    render () {
        return (
            <Container>
                <h2>we think you'd like</h2>
                <TabsContainer>
                    {this.renderTab(0)}
                    {this.renderTab(1)}
                    {this.renderTab(2)}
                </TabsContainer>
            </Container>
        );
    }
}

const Container = styled.div`
    position: relative;
    width: 20vw;
    margin: 2rem auto;
    border: 1px solid var(--border);
    overflow: hidden;
    height: 55vh;

    h2 {
        margin-bottom: 1rem;
        padding:0;
    }
`;

const TabsContainer = styled.div`
    posiiton: relative;
    background: var(--container);
    border-radius: 2rem;
    height: calc(100% - 3rem);

    div {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: calc(100% - 6rem);
    }
`;

function indexOf (item, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == item) {
            return i;
        }
    }
}

