import React from 'react';

import { StyledPost, PostWrapper, PostHeader, PostContent, PostInfo } from '../styles/postStyles';
import { Thumbnail } from './thumbnail';
import { Bolt } from './bolt';

export class Post extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            tagsOpen: false,
            moreOpen: false
        }
    }

    handleTagsClick () {
        if (!(this.state.moreOpen && this.state.tagsOpen)) {
            this.setState({ tagsOpen: !this.state.tagsOpen });
        }
    }

    handleMoreClick () {
        if (this.state.tagsOpen && !this.state.moreOpen) {
            this.setState({
                moreOpen: !this.state.moreOpen
            })
        } else {
            this.setState({ 
                moreOpen: !this.state.moreOpen,
                tagsOpen: !this.state.tagsOpen
            });
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
                            <div className="author-name">
                                {/* depends on whether it was original or reposted */}
                                Jane Doe reposted 
                            </div>
                            <div className="post-timestamp">
                                <a title="1h ago">aug 15, 2020</a>
                            </div>
                        </div>
                    </PostHeader>

                    <PostContent>
                        <div className="content-wrapper">
                            {this.props.pub ? 
                                <Thumbnail 
                                    desc={this.props.desc} 
                                    postLink={this.props.postLink}/> : 
                                <Bolt 
                                    hasVideo={this.props.hasVideo}
                                    postImages={this.props.postImages} 
                                    images={this.props.images} 
                                    caption={this.props.caption}
                                />
                            }
                        </div>
                    </PostContent>

                    <PostInfo tagsOpen={this.state.tagsOpen} moreOpen={this.state.moreOpen}>

                        <div className="post-actions">
                            <button className="info-tab"><i className="ri-star-fill"></i></button>
                            <div className="action">
                                <b>138</b> 
                                <i className="ri-flashlight-line"></i>
                            </div>
                            <div className="action">
                                <b>26</b>
                                <i className="ri-chat-3-line"></i>
                            </div>
                            <div className="action">
                                <b>45</b>
                                <i className="ri-share-forward-line"></i>
                            </div>
                        </div>

                        <div className="post-tags">
                            <button className="info-tab" onClick={() => this.handleTagsClick()}><i className="ri-hashtag"></i></button>
                            <a href="">life science</a>
                            <a href="">biology</a>
                            <a href="">microbiology</a>
                            <a href="">genetics</a>
                            <a href="">article</a>
                        </div>

                        <div className="more-actions">
                            <button className="info-tab" onClick={() => this.handleMoreClick()}><i className="ri-more-fill"></i></button>
                            <a href="">add to bookmarks</a>
                            <a href="">copy link</a>
                            <a href="">report</a>
                        </div>

                    </PostInfo>

                </PostWrapper>
            </StyledPost>
        )
    }
}


