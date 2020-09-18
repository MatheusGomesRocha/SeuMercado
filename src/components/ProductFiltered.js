import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Div = styled.View`
    background-color: #fff;
    borderTopLeftRadius: 50px;
    margin-top: -50px;
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
    color: #5CAB7D;
`;

let array = [
    {avatar: require('../assets/img/geral_filter.jpg'), name: 'Teste', price: '10,00'},
    {avatar: require('../assets/img/geral_filter.jpg'), name: 'Teste', price: '10,00'},
    {avatar: require('../assets/img/geral_filter.jpg'), name: 'Teste', price: '10,00'},
    {avatar: require('../assets/img/geral_filter.jpg'), name: 'Teste', price: '10,00'},
    {avatar: require('../assets/img/geral_filter.jpg'), name: 'Teste', price: '10,00'},
];

export default (props) => {
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
                                    <Icon style={{marginLeft: 2}} name="star-o" size={14} color="#E09F3E" />
                                    <Icon style={{marginLeft: 2}} name="star-o" size={14} color="#E09F3E" />
                                    <Icon style={{marginLeft: 2}} name="star-o" size={14} color="#E09F3E" />
                                    <Icon style={{marginLeft: 2}} name="star-o" size={14} color="#E09F3E" />
                                    <Icon style={{marginLeft: 2}} name="star-o" size={14} color="#E09F3E" />
                                </ItemRow>

                            </ItemColumn>

                        </ItemHeader>

                        {props.img ?
                            <Avatar source={props.img} />
                        : 
                            <Avatar source={array.img} />

                        }
                    </ItemRow>
                    
                </ItemBtn>
            ))}
        </Div>

    );
}