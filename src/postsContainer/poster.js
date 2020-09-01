import React from 'react';
import ReactDOM from 'react-dom';

import { StyledPost, PostWrapper, PostHeader, PostInfo, PostForm } from '../styles/postStyles';

export class Poster extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            tags: [],
            tagElements: [],
            openFiles: null
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

    fakeClick(e) {
        e.click();
    }

    addMedia () {
        this.setState({ openFiles: this.fakeClick });
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
                            <input type="text" name="post-text" placeholder="Post something..."></input> 

                            <input 
                                type="file" name="file[]" className="file" id="s-file" style={{ display: "none" }} 
                                ref={this.state.openFiles} onClick={() => console.log("clicked!")}>
                            </input>
                            <button onClick={() => this.addMedia()}><i class="ri-image-add-fill"></i></button>
                            <div id="fileNames"></div>
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