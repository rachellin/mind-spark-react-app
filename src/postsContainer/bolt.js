import React from 'react';
import { Lightbox } from './lightbox'; 
import { BoltContainer } from '../styles/postStyles';

export class Bolt extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            lightboxOn: false
        }
    }

    showLightbox () {
        this.setState({ lightboxOn: true });
    }

    render () {
        return (
            <>
            {this.state.lightboxOn ? <Lightbox/> : null}
            <BoltContainer>
                {this.props.postImages ? <PostImages images={this.props.images} onClick={() => this.showLightbox()}/> : null}
                {this.props.hasVideo ? <PostVideo/> : null}
            </BoltContainer>
            <PostCaption content={this.props.caption}/>
            </>
        );
    }
}

const PostImages = (props) => {
    return (
        <div className="post-images">{props.images.map(i => { return <img src={i} onClick={props.onClick}/>})}</div>
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



