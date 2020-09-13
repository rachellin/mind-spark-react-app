import styled from 'styled-components';

// export const PostHeader = styled.div`

// `

export const ProfileHead = styled.div`
    position: relative;
    margin-top: 80px; //temp
    background: #fff;
    border-radius: 2rem;
    padding: 2rem 2rem 5rem 2rem;

    .user-pic {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        
        img {
            border-radius: 50%;
            width: 6rem;
            border: 0.7rem solid var(--container);
            /* temp */
            background: var(--teal);
        }
    }

    h2 {
        margin-top: 1.5rem;
    }

    .bio {
        margin-top: 2rem;
    }

    .basics, .basics a {
        color: #777;
        margin-top: 1.25rem;

        span {
            margin-right: 2.5rem;
        }
    }
`

export const Roles = styled.div`
    margin-top: 2rem;

    span {
        padding: 0.8rem 1rem;
        background: var(--teal);
        margin-right: 2rem;
        border-radius: 2rem;
    }
`

export const Stats = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: TranslateX(-50%) translateY(50%);
    display: flex;

    div {
        background: var(--yellow);
        border-radius: 50%;
        width: 6rem;
        height: 6rem;
        margin-right: 2rem;
        border: 0.7rem solid #f8f8f8;
        padding: 1rem;
        font-size: 0.7rem;
        text-align: center;

        span {
            font-size: 1rem;
        }
    }
`

export const StyledPostFilter = styled.div`
    position: relative;
    margin: 5rem 0;
    background: var(--yellow);
    border-radius: 2rem;
    padding: 1rem;
    height: 3.5rem;

    .filter-all-posts, .filter-pubs, .filter-bolts {
        position: absolute;
        top: 0;
        right: 0;
        padding: 1rem;
        border-radius: 2rem;
        height: 100%;
        
        a {
            text-align: center;
            color: black;

            i {
                border: 1px solid #000;
                margin-top: 20rem;
            }
        }
    }

    .filter-all-posts {
        width: 100%;

        a {
            width: 33%;
            float: left;
        }
    }

    .filter-pubs {
        background: var(--blue);
        width: 67%;
        
        a {
            width: 50%;
            float: left;
        }
    }

    .filter-bolts {
        background: var(--yellow);
        width: 33%;
    }
`