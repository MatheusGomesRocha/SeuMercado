import React from 'react';
import styled from 'styled-components/native';
import Api from '../Api';
import {Alert} from 'react-native';

const Div = styled.View`
    margin: 15px 15px 0 15px;
`;


const ItemBtn = styled.TouchableHighlight`
    height: 150px;
    width: 100%;
    flex-direction: row;
    border-radius: 10px;
    background-color: #fff;
    align-items: center;
`;


const ItemImg = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    margin-left: 15px;
`;


const ColumnView = styled.View`
    width: 100%;
    justify-content: center;
    margin-left: 25px;
`;
const ItemName = styled.Text`
    font-size: 18px;
`;
const ItemQtd = styled.Text`
    color: #aaa;
    font-size: 18px;
    margin-top: 5px;
`;
const ItemPrice = styled.Text`
    font-size: 16px;
    color: #ea1d2c;
    font-weight: bold;
    margin-top: 5px;
`;

export default ({data, userId}) => {
    const AlertProduct = (id, img, name, price, qtd) => {
        Alert.alert(
            "Excluir",
            "Deseja excluir esse produto do carrinho?",
            [
                { text: "Excluir", onPress: () => deleteProductFromCart(id, img, name, price, qtd) },
                { text: 'Cancel', style: 'cancel' }
            ],
            { cancelable: false }
        );
    }

    const deleteProductFromCart = (id, img, name, price, qtd) => {
        Api.deleteProductFromCart(userId, id, img, name, price, qtd)
    }

    return(
        <Div>
            <ItemBtn onLongPress={() => AlertProduct(data.id, data.img, data.name, data.price, data.quantidade)} underlayColor="rgba(0, 0, 0, 0.1)" onPress={() => alert('olá')}>
                <>
                    <ItemImg source={data.img && {uri: data.img}} />
                    <ColumnView>
                        <ItemName>{data.name}</ItemName>
                        <ItemQtd>Quantidade: {data.quantidade}</ItemQtd>
                        <ItemPrice>R$ {parseFloat(data.price).toFixed(2)}</ItemPrice>
                    </ColumnView>
                </>
            </ItemBtn>           
        </Div>
    );
}