import React from 'react';
import ProductDefault from '../../components/ProductDefault';

import {
    Container,
    Texto,
    Scroll,
} from './style';

export default () => {
    return(
        <Container>
            <Scroll>
                <ProductDefault cart={true}/>
            </Scroll>
        </Container>
    );
}