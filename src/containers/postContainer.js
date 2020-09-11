import React from 'react';
import styled from 'styled-components';

import { Poster } from '../postsContainer/poster';
import { Post } from '../postsContainer/post';

export default function PostContainer () {
    return (
        <StyledContainer>
            <Poster/>
            <Post pub={true} desc={postData[0].desc} postLink={postData[0].postLink} tags={["one", "two"]}/>
            <Post pub={false} images={postData[1].images} caption={postData[1].caption} originalAuthor="Bob"/>
            <Post pub={false} caption={postData[2].caption}/>
            <Post pub={false} video="/trailer.mp4" caption={postData[3].caption}/>
            <Post pub={false} images={postData[4].images}/>
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
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        caption: 'this has a video!!'
    },
    {
        images: [
            "https://i.pinimg.com/564x/eb/75/4e/eb754e8232542314901dd66256fcf61b.jpg",
            "https://i.pinimg.com/564x/e4/7f/7e/e47f7ecf4ecbd3d5e56b4a7b4e52cb8d.jpg",
            "https://i.pinimg.com/564x/4d/35/23/4d352360fb4041f0e42becdb70e6916f.jpg"
        ],
        caption: 'another post with images yay'
    }
]
