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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
                    </p>
                    <button>see post</button>
                </div>
            </PubContainer>
        )
    }
}