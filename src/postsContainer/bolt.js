import React from 'react';

import { BoltContainer } from '../styles/postStyles';

export class Bolt extends React.Component {
    render () {
        return (
            <BoltContainer>
                <div class="post-images">
                    <img src="https://i.pinimg.com/564x/d0/ee/e9/d0eee93693047328b3254a6615c7be63.jpg"/>
                    <img src="https://i.pinimg.com/564x/eb/3a/1e/eb3a1e241cf0985e9a2733071b781c2d.jpg"/>
                    <img src="https://i.pinimg.com/564x/ff/3e/23/ff3e23db3890bd2ae2aaf71ecc0be07c.jpg"/>
                    <img src="https://i.pinimg.com/564x/45/90/6a/45906a397f31927ac245eb532681a3ad.jpg"/>
                </div>
                <div class="post-caption">
                    this is the caption
                </div>
            </BoltContainer>
        );
    }
}