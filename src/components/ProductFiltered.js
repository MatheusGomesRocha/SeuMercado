import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Div = styled.View`
    background-color: #fff;
    margin-top: -50px;
    align-items: center;
`;

const ItemBtn = styled.TouchableHighlight`
    height: 121px;
    width: 90%;
    margin-top: 15px;
    border: none;
    elevation: 1;
`;

const ItemRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
const ItemHeader = styled.View`
    width: 60%;
    justify-content: center;
    margin-left: 10px;
`;
const ItemColumn = styled.View`
`;
const Avatar = styled.Image`
    width: 120px;
    height: 120px;
    margin-top: 1px;
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

let array = [
    {avatar: require('../assets/img/carnes/bife.jpg'), name: 'Teste', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus sapien at nulla semper, sed dignissim nisi bibendum', price: '10,00'},
    {avatar: require('../assets/img/carnes/asa_frango.jpg'), name: 'Teste', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus sapien at nulla semper, sed dignissim nisi bibendum', price: '10,00'},
    {avatar: require('../assets/img/carnes/contra_file.jpg'), name: 'Teste', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus sapien at nulla semper, sed dignissim nisi bibendum', price: '10,00'},
    {avatar: require('../assets/img/carnes/frango_assado.jpg'), name: 'Teste', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus sapien at nulla semper, sed dignissim nisi bibendum', price: '10,00'},
    {avatar: require('../assets/img/carnes/peixe.jpg'), name: 'Teste', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus sapien at nulla semper, sed dignissim nisi bibendum', price: '10,00'},
    {avatar: require('../assets/img/carnes/peixe.jpg'), name: 'Teste', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus sapien at nulla semper, sed dignissim nisi bibendum', price: '10,00'},
    {avatar: require('../assets/img/carnes/peixe.jpg'), name: 'Teste', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus sapien at nulla semper, sed dignissim nisi bibendum', price: '10,00'},
];

export default (props) => {
    return(
            <Div>
            {array.map((item, k) => (
                <ItemBtn key={k} underlayColor="rgba(0, 0, 0, 0.1)" onPress={() => alert('hello world')}>
                    <ItemRow>

                        <ItemHeader>

                                <Name>{item.name}</Name>

                                <Description numberOfLines={2}>{item.description}</Description>

                                <Price>R$ {item.price}</Price>


                        </ItemHeader>

                        {/* {props.img ?
                            <Avatar source={props.img} />
                        :  */}
                            <Avatar resizeMode="cover" source={item.avatar} />

                        {/* } */}
                    </ItemRow>
                    
                </ItemBtn>
            ))}
        </Div>

    );
}