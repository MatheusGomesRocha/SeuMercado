import React from 'react';
import ScrollAnimated from '../../components/ScrollAnimatedProduct';
import {useRoute} from '@react-navigation/native';

import {
    Container
} from './style';

export default () => {
    const route = useRoute();

    const name = route.params.name;
    const img = route.params.img;

    return(
        <ScrollAnimated img={img} name={name} />
    );
}