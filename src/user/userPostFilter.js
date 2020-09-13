import React from 'react';
import { Link } from 'react-router-dom';

import { StyledPostFilter } from '../styles/profileStyles';

export class UserPostFilter extends React.Component {
    render () {
        return (
            <StyledPostFilter>
                <div className="filter-all-posts">
                    <a><i className="ri-sticky-note-line"></i> all posts</a>
                </div>
                <div className="filter-pubs">
                    <a><i className="ri-attachment-2"></i> publications</a>
                </div>
                <div className="filter-bolts">
                    <a><i className="ri-flashlight-line"></i> bolts</a>
                </div>
            </StyledPostFilter>
        )
    }
}