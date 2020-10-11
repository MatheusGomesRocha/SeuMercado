import React, {useState, useEffect} from 'react';
import Api from '../../Api'
import {
    Container,
    Texto
} from './style';
import {View} from 'react-native';

export default () => {
    const [array, setArray] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            setArray([]);
            
            let json = await Api.getProductsCart();
            setArray(json)
        }

        getProducts();
    }, [])
    
    return(
        <Container>
            
        </Container>
    );
}