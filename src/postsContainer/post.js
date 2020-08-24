import React from 'react';

import { StyledPost, PostWrapper, PostHeader, PostContent, PostInfo } from '../styles/postStyles';
import { Thumbnail } from './thumbnail';
import { Bolt } from './bolt';

export class Post extends React.Component {
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
                            {this.props.pub ? <Thumbnail/> : <Bolt/>}
                        </div>
                    </PostContent>

                    <PostInfo>

                        <div class="post-actions">
                            <button class="info-tab"><i class="ri-star-fill"></i></button>
                            <div class="action">
                                <b>138</b> 
                                <i class="ri-flashlight-line"></i>
                            </div>
                            <div class="action">
                                <b>26</b>
                                <i class="ri-chat-3-line"></i>
                            </div>
                            <div class="action">
                                <b>45</b>
                                <i class="ri-share-forward-line"></i>
                            </div>
                        </div>

                        <div class="post-tags">
                            <button class="info-tab"><i class="ri-hashtag"></i></button>
                            <a href="">life science</a>
                            <a href="">biology</a>
                            <a href="">microbiology</a>
                            <a href="">genetics</a>
                            <a href="">article</a>
                        </div>

                        <div class="more-actions">
                            <button class="info-tab"><i class="ri-more-fill"></i></button>
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


