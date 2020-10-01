import React from 'react';
import ProductDefault from '../../components/ProductDefault';

import {
    Container,
    Texto
} from './style';

export default () => {
    return(
        <Container>
            <ProductDefault cart={true}/>
        </Container>
    );
}