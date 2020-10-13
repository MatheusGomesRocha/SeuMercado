import React from 'react';
import Product from '../../components/Product';
import {useRoute} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import {
    Container
} from './style';

export default () => {
    const route = useRoute();

    const id = route.params.id;
    const name = route.params.name;
    const type = route.params.type;
    const img = route.params.img;
    const description = route.params.description;
    const price = route.params.price;

    console.log(price)

    return(
        <Container>
            <StatusBar translucent={true} backgroundColor="transparent" barStyle="light-content" />
            <Product id={id} img={img} type={type} name={name} price={price} description={description} />
        </Container>
    );
}