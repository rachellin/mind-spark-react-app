import React from 'react';

import { HorizontalCarousel } from '@bit/rachellin.carousels.horizontal-carousel';
import { StyledLightbox } from '../styles/postStyles';

export class Lightbox extends React.Component {
    render () {
        return (
            <StyledLightbox onClick={this.props.onClick}>
                <HorizontalCarousel
                    panels={this.props.images.length}
                    panelContent={this.props.images.map(i => <img src={i}/>)}
                    transitionTime={0.5}
                    lightbox={true}
                />
            </StyledLightbox>
        );
    }
}



