import styled from 'styled-components';

export const StyledPost = styled.div`
    overflow: hidden;
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
        width: calc(650px - 8rem);
        border-radius: 2rem;
        overflow: hidden;
    }
`;

// export const PostHeader = styled.div`
    
// `;