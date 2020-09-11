import React from 'react';
import ReactDOM from 'react-dom';

import { StyledPost, PostWrapper, PostHeader, PostInfo, PostForm } from '../styles/postStyles';

export class Poster extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            tags: [],
            tagElements: [],
            openFiles: null,
            file: null
        };
        this.makeTag = this.makeTag.bind(this);
    }

    // make tag on enter
    makeTag (e) {
        const value = e.target.value;
        if (e.charCode == 13) {
            e.preventDefault();
            if (value !== "") {
                e.target.value = "";

                const updatedTags = this.state.tags.slice();
                updatedTags.push(value);

                // create element for tag
                const tagElement = <a>{value}</a>;
                const updatedTagElements = this.state.tagElements.slice();
                updatedTagElements.push(tagElement);

                this.setState({
                    tags: updatedTags,
                    tagElements: updatedTagElements
                })
            }
        } else {
            console.log("nope");
        }
    }

    render () {
        return (
            <StyledPost>
                <PostWrapper>

                    <PostHeader>
                        <div className="author">
                            <div className="author-pic">
                                <img src={this.props.authorPic} alt="author's profile picture"/>
                            </div>
                        </div>
                    </PostHeader>

                    <PostForm>
                        <div className="post-body">
                            <Uploader/>
                            <input type="text" name="post-text" placeholder="Post something..."></input> 
                        </div>
                        
                        <PostInfo poster={true}>
                            <div className="poster-tags">
                                <button className="info-tab"><i className="ri-hashtag"></i></button>
                                <div className="tags-container">
                                    <div className="tags-wrapper">{this.state.tagElements}</div>
                                    <input 
                                        type="text" name="post-tags" onKeyPress={this.makeTag}
                                        placeholder={this.state.tags.length > 0 ? "" : "what's your post about?"}>
                                    </input>
                                </div>
                            </div>
                            <input type="submit" value="post" className="poster-submit"></input>
                        </PostInfo>
                    </PostForm>
                </PostWrapper>
            </StyledPost>
        );
    }
}

const Uploader = (props) => {
    const hiddenFileInput = React.createRef();

    const openFiles = (e) => {
        // this.setState({ openFiles: this.fakeClick });
        hiddenFileInput.current.click();
    }

    let mediaCollection;

    const uploadMedia = (e) => {
        console.log("uploading!");
        if (e.target.files) {
            const files = Array.from(e.target.files);
            Promise.all(files.map(file => {
                return (new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.addEventListener('load', (event) => {
                        resolve(event.target.result);
                    });
                    reader.addEventListener('error', reject);
                    reader.readAsDataURL(file);
                }));
            }))
            .then(images => {
                // this.setState({ mediaArray: images, file: images[0] });
                mediaCollection = images[0];
            })
            .catch(err => console.error(err));
        }
    }

    return (
        <>
        <div className="post-media">
            <img src={mediaCollection}/>
        </div>
        <input type="file" hidden onChange={() => console.log("hi")}/>
        <button onClick={openFiles}><i class="ri-image-add-fill"></i></button>
        </>
    );
}

Poster.defaultProps = {
    authorPic: "https://i.pinimg.com/564x/11/bd/2c/11bd2cb6af23127447dcb7b05423d3f0.jpg"
}