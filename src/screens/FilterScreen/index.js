import React from 'react';
import ProductDefault from '../../components/ProductDefault';
import {useRoute} from '@react-navigation/native';

import {
    Container,

    Texto
} from './style';

export default () => {
    const route = useRoute();

    const type = route.params.type;

    return(
        <Container>
            <ProductDefault data={type} />
        </Container>
    );
}