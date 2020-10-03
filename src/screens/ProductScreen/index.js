import React from 'react';
import Product from '../../components/Product';
import {useRoute} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import {
    Container
} from './style';

export default () => {
    const route = useRoute();

    const name = route.params.name;
    const img = route.params.img;
    const description = route.params.description;
    const price = route.params.price;

    return(
        <Container>
            <StatusBar translucent={true} backgroundColor="transparent" barStyle="light-content" />
            <Product img={img} name={name} price={price} description={description} />
        </Container>
    );
}