import React, {useState, useEffect} from 'react';
import ProductCart from '../../components/ProductCart';
import Api from '../../Api';
import auth from '@react-native-firebase/auth';

import {
    Container,
    
    Flat,

    DefaultBtn,
    DefaultBtnText,
} from './style';

export default () => {
    const [arrayCart, setArrayCart] = useState([]);
    const userId = auth().currentUser.uid;

    useEffect(() => {
        const getProducts = async () => {
            setArrayCart([]);
            
            let json = await Api.getProductsCart(userId);
            setArrayCart(json)
        }

        getProducts();
    }, [])


    return(
        <Container>
            
            <Flat
                data={arrayCart}
                renderItem={({item}) => <ProductCart data={item} />}
                keyExtractor={(item) => item.id}
            />       

            <DefaultBtn>
                <DefaultBtnText>Finalizar Pedido</DefaultBtnText>
            </DefaultBtn> 
        </Container>
    );
}