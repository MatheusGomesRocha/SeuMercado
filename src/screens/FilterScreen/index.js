import React from 'react';
import ProductFiltered from '../../components/ProductFiltered';
import {useRoute} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import {
    Container,

} from './style';

export default () => {
    const route = useRoute();

    const type = route.params.type;
    const img = route.params.img;

    return(
        <Container>
	        <StatusBar translucent={true} backgroundColor='transparent' barStyle="default"/>
            <ProductFiltered type={type} img={img} />
        </Container>
    );
}