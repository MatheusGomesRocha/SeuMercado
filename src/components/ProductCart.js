import React from 'react';
import styled from 'styled-components/native';

const Div = styled.View`
    margin: 30px 15px 0 15px;
`;

const ItemView = styled.TouchableHighlight`
    height: 120px;
    width: 100%;
    flex-direction: row;
    border-radius: 10px;
    background-color: #fff;
    align-items: center;
`;

const ItemImg = styled.Image`
    width: 120px;
    height: 120px;
    border-radius: 10px;
`;
const ColumnView = styled.View`
    width: 55%;
    justify-content: center;
    margin-left: 10px;
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


export default ({data}) => {
    return(
        <Div>
            <ItemView underlayColor="rgba(0, 0, 0, 0.1)" onPress={() => alert('olá')}>
                <>
                <ItemImg source={require('../assets/img/carne_filter.jpg')} />
                <ColumnView>
                    <ItemName>{data.items.name}</ItemName>
                    <ItemQtd>Quantidade: {data.items.quantidade}</ItemQtd>
                    <ItemPrice>R$ {parseFloat(data.items.price).toFixed(2)}</ItemPrice>
                </ColumnView>
                </>
            </ItemView>

            
        </Div>
    );
}