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

    uploadMedia (e) {
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
                this.setState({ mediaArray: images, file: images[0] });
            })
            .catch(err => console.error(err));
        }
    }

    render () {
        return (
            <StyledPost>
                <PostWrapper>

                    <PostHeader>
                        <div className="author">
                            <div className="author-pic">
                                <img src=""/>
                            </div>
                        </div>
                    </PostHeader>

                    <PostForm>
                        <div className="post-body">
                            <div className="post-media">
                                <img src={this.state.file}/>
                            </div>
                            <input type="text" name="post-text" placeholder="Post something..."></input> 
                            <Uploader/>
                        </div>
                        
                        <PostInfo>
                            <div className="poster-tags">
                                <button className="info-tab"><i className="ri-hashtag"></i></button>
                                <div className="tags-wrapper">{this.state.tagElements}</div>
                                <input 
                                    type="text" name="post-tags" onKeyPress={this.makeTag}
                                    placeholder={this.state.tags.length > 0 ? "" : "what's your post about?"}>
                                </input>
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
    const hiddenFileInput = React.useRef(null);

    const openFiles = (e) => {
        // this.setState({ openFiles: this.fakeClick });
        hiddenFileInput.current.click();
    }

    return (
        <>
        <input type="file" style={{ display: "none" }} ref={hiddenFileInput}/>
        <button onClick={openFiles}><i class="ri-image-add-fill"></i></button>
        </>
    );
}