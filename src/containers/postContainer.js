import React from 'react';
import styled from 'styled-components';

import { Post } from '../postsContainer/post';

export default function PostContainer () {
    return (
        <StyledContainer>
            post container!
            <Post pub={true}/>
            <Post pub={false} postImages={true} images={postData[0].images} caption={postData[0].caption}/>
            <Post pub={false} postImages={false}/>
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
    /*border: 1px solid #000;*/
    width: 55%;
    margin-left: 4rem;
`
const postData = [
    {
        images: [
            "https://i.pinimg.com/564x/d0/ee/e9/d0eee93693047328b3254a6615c7be63.jpg",
            "https://i.pinimg.com/564x/eb/3a/1e/eb3a1e241cf0985e9a2733071b781c2d.jpg",
            "https://i.pinimg.com/564x/ff/3e/23/ff3e23db3890bd2ae2aaf71ecc0be07c.jpg",
            "https://i.pinimg.com/564x/45/90/6a/45906a397f31927ac245eb532681a3ad.jpg"
        ],
        caption: 'this is a very cool caption!'
    }
]
