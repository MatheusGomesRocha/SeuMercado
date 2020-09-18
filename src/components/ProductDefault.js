import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Div = styled.View`
`;

const ItemBtn = styled.TouchableHighlight`
    min-height: 100px;
    borderBottomWidth: 1px;
    borderBottomColor: rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 100%;
`;

const ItemRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
const ItemHeader = styled.View`
    flex-direction: row;

`;
const ItemColumn = styled.View`
`;
const Avatar = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 10px;
`;
const Name = styled.Text`
    font-size: 16px;
`;
const Price = styled.Text`
    font-size: 16px;
`;
const Rate = styled.Text`
    font-size: 16px;
`;


let array = [
    {avatar: require('../assets/img/geral_filter.jpg'), name: 'Teste', rate: '8.7', price: '10,00'},
    {avatar: require('../assets/img/geral_filter.jpg'), name: 'Teste', rate: '8.7', price: '10,00'},
    {avatar: require('../assets/img/geral_filter.jpg'), name: 'Teste', rate: '8.7', price: '10,00'},
    {avatar: require('../assets/img/geral_filter.jpg'), name: 'Teste', rate: '8.7', price: '10,00'},
    {avatar: require('../assets/img/geral_filter.jpg'), name: 'Teste', rate: '8.7', price: '10,00'},
];

export default ({data}) => {
    return(
        <Div>
            {array.map((item, k) => (
                <ItemBtn key={k} underlayColor="rgba(0, 0, 0, 0.1)" onPress={() => alert('hello world')}>
                    <ItemRow>
                        <ItemHeader>
                            <ItemColumn>
                                <Name>{item.name}</Name>
                                <Price>R$ {item.price}</Price>
                                <ItemRow style={{marginTop: 5}}>
                                    <Icon style={{marginLeft: 2}} name="star-o" size={14}/>
                                    <Icon style={{marginLeft: 2}} name="star-o" size={14}/>
                                    <Icon style={{marginLeft: 2}} name="star-o" size={14}/>
                                    <Icon style={{marginLeft: 2}} name="star-o" size={14}/>
                                    <Icon style={{marginLeft: 2}} name="star-o" size={14}/>
                                </ItemRow>
                            </ItemColumn>
                        </ItemHeader>
                        <Avatar source={item.avatar} />

                    </ItemRow>
                    
                </ItemBtn>
            ))}
        </Div>
    );
}