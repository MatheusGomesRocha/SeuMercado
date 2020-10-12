import React from 'react';
import {useRoute} from '@react-navigation/native';

import {
    Container,

} from './style';

export default () => {
    const route = useRoute();

    let adress = route.params.adress;
    let infoOrder = route.params.infoOrder;     // Array com as infos do pedido, só passar para o component e acessar como um array normal. 
                                                // path do firestore: order.products.products


    return(
        <Container>
            
        </Container>
    );
}