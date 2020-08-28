import React from 'react';
import styled from 'styled-components';

import { Post } from '../postsContainer/post';

export default function PostContainer () {
    return (
        <StyledContainer>
            post container!
            <Post pub={true} desc={postData[0].desc} postLink={postData[0].postLink}/>
            <Post pub={false} postImages={true} images={postData[1].images} caption={postData[1].caption}/>
            <Post pub={false} postImages={false} caption={postData[2].caption}/>
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
        type: "graphic",
        images: [
            "https://i.pinimg.com/564x/6e/65/ab/6e65abb8a632d28132b528c1fcf38622.jpg"
        ],
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
        postLink: "/"
    },
    {
        images: [
            "https://i.pinimg.com/564x/d0/ee/e9/d0eee93693047328b3254a6615c7be63.jpg",
            "https://i.pinimg.com/564x/eb/3a/1e/eb3a1e241cf0985e9a2733071b781c2d.jpg",
            "https://i.pinimg.com/564x/ff/3e/23/ff3e23db3890bd2ae2aaf71ecc0be07c.jpg",
            "https://i.pinimg.com/564x/45/90/6a/45906a397f31927ac245eb532681a3ad.jpg"
        ],
        caption: 'this is a very cool caption!'
    },
    {
        caption: 'this a post with no images :( just some text'
    }
]
