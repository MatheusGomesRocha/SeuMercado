import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {Alert} from 'react-native';

const Div = styled.View`
    margin: 0 15px 0 15px;
`;


const ItemBtn = styled.TouchableHighlight`
    min-height: 120px;
    width: 100%;
    flex-direction: row;
    border-radius: 10px;
    background-color: #fff;
    align-items: center;
    borderBottomWidth: 1px;
    borderBottomColor: #ddd;
    padding: 15px;
`;


const ItemRow = styled.View`
    flex-direction: row;
    align-items: center;
`;


const Img = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 10px;
`;


const ItemHeader = styled.View`
    width: 70%;
    margin-left: 25px;
`;

const Name = styled.Text`
    font-size: 16px;
`;
const Description = styled.Text`
    color: #aaa;
    margin-top: 5px;
`;
const Price = styled.Text`
    font-size: 16px;
    color: #ea1d2c;
    font-weight: bold;
    margin-top: 5px;
`;

export default ({data}) => {
    const navigation = useNavigation();

    const userLogin = useSelector(state=>state.user.email);

    const GoToProduct = (id, name, img, description, price) => {
        if(userLogin) {
            navigation.navigate('product', {id, name, img, description, price});
        } else {
            Alert.alert(
                "Ops...",
                "Você precisa está logado para ver o produto",
                [
                  { text: "OK" }
                ],
                { cancelable: false }
            );
        }
    } 
    
    return(
        <Div>
            <ItemBtn underlayColor="rgba(0, 0, 0, 0.1)" onPress={() => GoToProduct(data.id, data.name, data.img, data.description, data.price)}>
                <ItemRow>
                    <Img source={data.img && {uri:data.img}} />

                    <ItemHeader>
                        <Name>{data.name}</Name>
                        <Description numberOfLines={3}>{data.description?data.description: 'Nenhuma descrição atribuída'}</Description>
                        <Price>R$ {parseFloat(data.price).toFixed(2)}</Price>
                    </ItemHeader>

                </ItemRow>
            </ItemBtn>
        </Div>
    );
}