import React from 'react';
import styled from 'styled-components';

import { StyledContainer } from '../styles/containerStyles';
import {HorizontalCarousel, StyledCarousel} from '@bit/rachellin.carousels.horizontal-carousel';

export class Clouds extends React.Component {
    render () {
        return (
            <StyledContainer>
                <h1>clouds</h1>
                <HorizontalCarousel/>
            </StyledContainer>
        )
    }
}




