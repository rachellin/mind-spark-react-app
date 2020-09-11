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
                                <img src={this.props.authorPic} alt="author's profile picture"/>
                            </div>
                            <div className="author-name">
                                {this.props.originalAuthor ? `${this.props.author} reposted this from ${this.props.originalAuthor}` : 
                                `${this.props.author} posted this`} 
                            </div>
                            <div className="post-timestamp">
                                <a title="1h ago">{this.props.date}</a>
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
                                    video={this.props.video}
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
                            {this.props.tags ? this.props.tags.map(tag => <a href="">{tag}</a>) : null}
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

const currentDate = new Date();

Post.defaultProps = {
    author: "Jane Doe",
    date: "Sep 10, 2020",
    authorPic: "https://i.pinimg.com/564x/11/bd/2c/11bd2cb6af23127447dcb7b05423d3f0.jpg"
}