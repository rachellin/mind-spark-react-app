import React from 'react';
import { Lightbox } from './lightbox'; 
import { BoltContainer } from '../styles/postStyles';

export class Bolt extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            lightboxOn: false,
        }
    }

    showLightbox (index) {
        this.setState({ 
            lightboxOn: true,
            clickedIndex: index
        });
    }

    checkClick (e) {
        if (e.target.tagName !== "IMG" && e.target.tagName !== "I" && e.target.className !== "sc-jSFkmK hNjaWT") {
            this.setState({ lightboxOn: false });
        }
    }

    render () {
        return (
            <>
            {this.state.lightboxOn ? <Lightbox images={this.props.images} onClick={(e) => this.checkClick(e)} index={this.state.clickedIndex}/> : null}
            <BoltContainer>
                {this.props.postImages ? <PostImages images={this.props.images} onClick={(index) => this.showLightbox(index)}/> : null}
                {this.props.hasVideo ? <PostVideo/> : null}
            </BoltContainer>
            <PostCaption content={this.props.caption}/>
            </>
        );
    }
}

const PostImages = (props) => {
    return (
        <div className="post-images">{props.images.map((url, index) => { return <img src={url} onClick={() => props.onClick(index)}/>})}</div>
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



