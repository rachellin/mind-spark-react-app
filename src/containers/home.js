import React from 'react';
import { StyledContainer } from '../styles/containerStyles';

import PostContainer from './postContainer';
import RecWidget from '../recWidget/recWidget';

export class Home extends React.Component {
    render () {
        return (
            <StyledContainer>
                <h1>home</h1>
                <PostContainer/>
                {/* <RecWidget/> */}
            </StyledContainer>
        )
    }
}