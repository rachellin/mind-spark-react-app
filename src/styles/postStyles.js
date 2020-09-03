import styled from 'styled-components';

export const StyledPost = styled.div`
    overflow: hidden;
    margin-bottom: 6rem;

    input[name="post-text"] {
        //border: 1px solid #000;
        padding: 2rem 4rem;
        width: 100%;
    }
`;

export const PostWrapper = styled.div`
    background: #fff;
    background: var(--background);
    border-radius: 2rem;
    padding: 2rem 0 0 0;
`;

export const PostHeader = styled.div`
    position: relative;
    margin-bottom: 1rem;

    .author-pic {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-50%);
        
        img {
            border-radius: 50%;
            width: 6rem;
            border: 0.7rem solid var(--container);
            /* temp */
            background: var(--teal);
        }
    }

    .author-name {
        font-style: italic;
        margin: 0 0 0 4rem;
        float: left;
        padding: 0.5rem 0;
    }

    .post-timestamp {
        float: right;
        margin-right: 2rem;
        background: #f8f8f8;
        border-radius: 2rem;
        padding: 0.5rem 1rem;
    }
      
    .author-name, .post-timestamp {
        font-size: 0.9rem;
    }

`;

export const PostContent = styled.div`
    padding: 2rem 4rem;
    margin: 2rem 0;
    border: 1px solid salmon;

    .content-wrapper {
        /*width: calc(650px - 8rem);*/
        width: 100%;
        border-radius: 2rem;
        overflow: hidden;
    }
`;

export const BoltContainer = styled.div`
    width: 100%;
    border: 1px solid lightblue;

    video {
        width: 100%;
        border-radius: 2rem;
    }

    .post-images {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }
  
    .post-images img {
        border-radius: 2rem;
        width: calc(50% - 1rem);
        object-fit: cover;
        flex-grow: 1;
        margin: 0.25rem;
    }

    .post-images img:hover {
        cursor: pointer;
    }
  
    .post-caption {
        margin-top: 1rem;
        text-align: left;
    }
`;

export const Lightbox = styled.div`
    background: rgb(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    text-align: center;
`

export const PubContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    transition: 0.5s;

    :hover {
        transform: translateX(-100%);
        transition: 0.5s;
    }
      
    .thumbnail-pic, .pub-desc {
        min-width: calc(100% - 0rem);
        max-width: calc(100% - 0rem);
    }
      
    .thumbnail-pic img {
        display: block;
        width: 100%;
    }
      
    .pub-desc {
        background: #f8f8f8;
        padding: 1rem 4rem;
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
    }
      
    .pub-type {
        margin-bottom: 2rem;
    }
      
    .pub-type i {
        background: #FCF3D9;
        border: 3px solid #fff;
        border-radius: 50%;
        width: 1.5rem;
        height: 1.5rem;
        font-size: 1.5rem;
        padding: 1rem;
    }
      
    .pub-desc a {
        margin-top: 1rem;
        padding: 1rem;
        background: #fff;
        border-radius: 2rem;
    }
`;

export const PostInfo = styled.div`
    position: relative;
    border-radius: 2rem; 
    text-align: center;
    padding: 2rem;
    //border:1px solid #000;
    background: ${props => props.poster? "var(--yellow)" : "#ECF2F8"};

    .post-actions, .post-tags, .more-actions, .poster-tags, .poster-submit {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        border-radius: 2rem;
        padding: 1rem;
        text-align: center;
    }
      
    .post-actions {
        left: 0;
        background: #ECF2F8;
        width: calc(100% - (8rem + 2rem) + 4rem);
    }
    
    .action {
        display: inline-block;
        margin-right: 2rem;
    }
    
    .action i {
        display: block;
    }
    
    .post-tags {
        background: #FCF3D9;
        width: ${props => props.tagsOpen ? "calc(100% - 4rem)" : "8rem"};
        transition: 0.4s width;

        a {
            padding: 0.3rem 0.8rem;
            font-size: 0.8rem;
            margin-right: 0.5rem;
            opacity: ${props => props.tagsOpen ? "1" : "0"};
            display: ${props => props.tagsOpen ? "inline-block" : "none"};
            transition: 0.2s ease-in;
        }
    }

    .more-actions a {
        margin-right: 1rem;
        opacity: ${props => props.moreOpen ? "1" : "0"};
        display: ${props => props.moreOpen ? "inline-block" : "none"};
        transition: 0.2s ease-in;
    }
    
    .more-actions {
        background: #ECF2F8;
        width: ${props => props.moreOpen ? "calc(100% - 8rem)" : "4rem"};
    }

    .poster-tags {
        background: #FCF3D9;
        width: calc(100% - 8rem);
        left: 0;
        display: flex;
        border: 1px solid salmon;

        .tags-container {
            width: 100%;
            height: 100%;
            text-align: left;
            overflow-x: scroll;
            display: flex;
            min-width: 4rem;
            border: 1px solid lightblue;
        }

        input {
            width: 100%;
            height: 100%;
            //display: inline-block;
            border: 1px solid #000;
            padding-right: 10rem;
        }

        .tags-wrapper {
            margin-left: 1rem;

            a {
                border: 2px solid #fff;
                //display: inline-block;
                padding: 0.3rem 0.8rem;
                font-size: 0.8rem;
                margin-right: 0.5rem;
                //width: auto;
            }
        }
    }

    .poster-submit {
        background: #ECF2F8;
        width: 8rem;
    }
    
    button.info-tab {
        font-size: 1.75rem;
        color: #1F405E;
        padding: 0;
        float: left;
    }
`;

export const PosterWrapper = styled.div`
    background: var(--background);
    padding: 2rem 4rem;
    border-radius: 2rem;
    margin-bottom: 6rem;
`;

export const PostForm = styled.form`
    .post-body {
        position: relative;
        //border: 1px solid skyblue;
        padding-bottom: 2rem;

        button {
            position: absolute; 
            bottom: 1.5rem;
            right: 1rem;
            color: rgb(0, 0, 0, 0.75);

            i {
                background: rgb(252, 243, 217, 0.5);
                border-radius: 50%;
                width: 1.25rem;
                height: 1.25rem;
                font-size: 1.25rem;
                padding: 0.8rem;
            }

            :hover {
                color: color: #000;
            }

            :hover i {
                background: var(--yellow);
            }
        }
    }
`;


// export const PostHeader = styled.div`
    
// `;