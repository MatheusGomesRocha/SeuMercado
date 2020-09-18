import React from 'react';
import ProductFiltered from '../../components/ProductFiltered';
import {useRoute} from '@react-navigation/native';

import {
    Container,

    Scroll, 

    ImgView,
    FilterImg,
} from './style';

export default () => {
    const route = useRoute();

    const type = route.params.type;
    const img = route.params.img;

    return(
        <Container>
            <Scroll>

            <ImgView>
                <FilterImg source={img} />
            </ImgView>
            <ProductFiltered type={type} img={img} />
            </Scroll>

        </Container>
    );
}