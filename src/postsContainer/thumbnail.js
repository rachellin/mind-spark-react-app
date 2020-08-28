import React from 'react';

import { PubContainer } from '../styles/postStyles';

export class Thumbnail extends React.Component {
    render () {
        return (
            <PubContainer>
                <div class="thumbnail-pic">
                    <img src="https://i.pinimg.com/564x/6e/65/ab/6e65abb8a632d28132b528c1fcf38622.jpg"/>
                </div>
                <div class="pub-desc">
                    <div class="pub-type">
                        <i class="ri-palette-line"></i>
                    </div>
                    <p>
                        {this.props.desc}
                    </p>
                    {/* <button>see post</button> */}
                    <a href={this.props.postLink}>see post</a>
                </div>
            </PubContainer>
        )
    }
}