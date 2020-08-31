import React from 'react';

import { BoltContainer } from '../styles/postStyles';

export class Bolt extends React.Component {

    render () {
        return (
            <>
            <BoltContainer>
                {this.props.postImages ? <PostImages images={this.props.images}/> : null}
                {this.props.hasVideo ? <PostVideo/> : null}
            </BoltContainer>
            <PostCaption content={this.props.caption}/>
            </>
        );
    }
}

const PostImages = ({ images }) => {
    return (
        <div className="post-images">{images.map(i => { return <img src={i}/>})}</div>
    )
}

const PostVideo = () => {
    return (
        <video controls loop muted autoPlay>
            <source src="/trailer.mp4" type="video/mp4"/>
        </video>
    );
}

const PostCaption = (props) => {
    return (
        <div className="post-caption">
            {props.content}
        </div>
    )
}



