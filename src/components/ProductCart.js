import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';

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


export default ({data}) => {
    return(
        <Div>
            <ItemBtn underlayColor="rgba(0, 0, 0, 0.1)" onPress={() => alert('olá')}>
                <>
                    <ItemImg source={data.items.img && {uri: data.items.img}} />
                    <ColumnView>
                        <ItemName>{data.items.name}</ItemName>
                        <ItemQtd>Quantidade: {data.items.quantidade}</ItemQtd>
                        <ItemPrice>R$ {parseFloat(data.items.price).toFixed(2)}</ItemPrice>
                    </ColumnView>
                </>
            </ItemBtn>           
        </Div>
    );
}