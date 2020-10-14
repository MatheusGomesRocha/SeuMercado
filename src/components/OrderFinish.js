import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const ItemView = styled.View`
    flex: 1;
    padding: 15px;
`;


const DateText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
`;


const InfoItemView = styled.View`
    height: 300px;
    width: 100%;
    background-color: #fff;
    elevation: 5;
    border-radius: 10px;
`;


const HeaderView = styled.View`
    flex-direction: row;
    margin: 0 15px 0 15px;
    height: 80px;
    align-items: center;
    borderBottomWidth: 1px;
    borderBottomColor: #ddd;
`;


const Img = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 30px;
`;


const ColumnView = styled.View`
    margin-left: 15px;
`;
const ColumnTextTop = styled.Text`
    font-size: 16px;
`;
const ColumnTextBottom = styled.Text`
    color: #aaa;
`;


const OrderView = styled.View`
    flex-direction: row;
    margin: 0 15px 0 15px;
    height: 80px;
    align-items: center;
    justify-content: center;
    borderBottomWidth: 1px;
    borderBottomColor: #ddd;
`;
const OrderQtdText = styled.Text`
    border: 1px solid #ddd;
    text-align: center;
    font-size: 18px;
    color: #aaa;
`;
const OrderNameText = styled.Text`
    color: #aaa;
    font-size: 18px;
`;
const OrderPriceText = styled.Text`
    color: #ea1d2c;
    font-weight: bold;
    font-size: 18px;
`;


const StatusView = styled.View`
    margin: 0 15px 0 15px;  
    height: 60px;
    align-items: center;
    justify-content: center;
    borderBottomWidth: 1px;
    borderBottomColor: #ddd;
`;
const StatusText = styled.Text`
    font-size: 16px;
    color: green;
`;


const BtnView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex: 1;
`;
const DefaultBtn = styled.TouchableHighlight`
    width: 50%;
    align-items: center;
    justify-content: center;
    height: 80px;
`;
const BtnText = styled.Text`
    color: #ea1d2c;
    font-size: 18px; 
`;


export default ({data, adress, infoOrder, finish}) => {
    const navigation = useNavigation()

    let id = data.id;
    let idSplit = data.id.substr(0, 4);
    let subtotal = data.subtotal;
    let status = data.status;

    return(
        <ItemView>
            {finish &&
                <DateText>Quarta, 19/02/2020</DateText>
            }
            <InfoItemView>

                <HeaderView>
                    <Img source={require('../assets/img/carne_filter.jpg')} />

                    <ColumnView>
                        <ColumnTextTop>SeuMercado - Benfica</ColumnTextTop>
                        <ColumnTextBottom>Pedido concluído - {idSplit}</ColumnTextBottom>
                    </ColumnView>
                </HeaderView>

                <OrderView>
                    <OrderQtdText> {data.quantidadeTotal} </OrderQtdText>
                    <OrderNameText> Produtos por </OrderNameText>
                    <OrderPriceText> R$ {parseFloat(subtotal).toFixed(2)} </OrderPriceText>
                </OrderView>

                <StatusView>
                    <StatusText>Status: {data.status}</StatusText>
                </StatusView>

                <BtnView>
                    <DefaultBtn underlayColor="rgba(0, 0, 0, 0.1)" onPress={() => alert('Report')}>
                        <BtnText>Reportar</BtnText>
                    </DefaultBtn>

                    <DefaultBtn underlayColor="rgba(0, 0, 0, 0.1)" onPress={() => navigation.navigate('details', {adress, id, subtotal, status})}>
                        <BtnText>Detalhes</BtnText>
                    </DefaultBtn>
                </BtnView>

            </InfoItemView>
            
        </ItemView>
    );
}