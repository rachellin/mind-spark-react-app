import React from 'react';
import styled from 'styled-components';

import { Post } from '../postsContainer/post';

export default function PostContainer () {
    return (
        <StyledContainer>
            post container!
            <Post/>
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
    /*border: 1px solid #000;*/
    width: 55%;
`
