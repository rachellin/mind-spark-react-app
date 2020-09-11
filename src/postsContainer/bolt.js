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

    checkClick (e) {
        if (e.target.tagName !== "IMG" && e.target.tagName !== "I" && e.target.className !== "sc-jSFkmK hNjaWT") {
            this.setState({ lightboxOn: false });
        }
    }

    render () {
        return (
            <>
            {this.state.lightboxOn ? <Lightbox images={this.props.images} onClick={(e) => this.checkClick(e)}/> : null}
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



