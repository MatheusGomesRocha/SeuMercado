import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchIcon from '../assets/svg/search.svg';
import {useNavigation} from '@react-navigation/native';

const Div = styled.View`
    background-color: #fff;
    align-items: center;
`;

const InputView = styled.View`
    background-color: #00000030;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    border-radius: 25px;
    width: 90%;
    margin: 30px 0 30px 0;
`;
const Input = styled.TextInput`
    color: #000;
    padding: 15px;
    flex: 1;
`;
const IconBtn = styled.TouchableOpacity`
    padding: 15px;
`;

const ItemView = styled.TouchableHighlight`
    height: 120px;
    border: none;
    elevation: 1;
    width: 90%;
    margin-top: 15px;
`;

const ItemRow = styled.View`
    flex-direction: row;
    justify-content: ${props=>props.jContent};
`;
const ItemHeader = styled.View`
    width: 55%;
    justify-content: center;
    margin-left: 10px;
`;
const Avatar = styled.Image`
    width: 120px;
    height: 120px;
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

const ItemQntd = styled.View`
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`;
const ItemBtnQntd = styled.TouchableOpacity``;
const ItemQntdValue = styled.Text`
    font-size: 18px;
`;


let array = [
    {avatar: require('../assets/img/carnes/bife.jpg'), name: 'Fulano', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus sapien at nulla semper, sed dignissim nisi bibendum', price: 10.00},
    {avatar: require('../assets/img/carnes/asa_frango.jpg'), name: 'Cicrano', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus sapien at nulla semper, sed dignissim nisi bibendum', price: 10.35},
    {avatar: require('../assets/img/carnes/contra_file.jpg'), name: 'Beltrano', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus sapien at nulla semper, sed dignissim nisi bibendum', price: 10.20},
    {avatar: require('../assets/img/carnes/frango_assado.jpg'), name: 'Teste', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus sapien at nulla semper, sed dignissim nisi bibendum', price: 10.58},
];

export default (props) => {
    const navigation = useNavigation();

    const [quantidade, setQuantidade] = useState(1);
    const [userSearch, setUserSearch] = useState();
    const [arraySearch, setArraySearch] = useState(array);

    const filterData = array.filter((item) => {              // Array que será mostrado, pegando o valor digitado do usuário e filtrando para mostrar os que tem
        if(userSearch) {
            return item.name.indexOf(userSearch) >=0
        } else {
            return array;
        }
    }) 

    useEffect(() => {
        if(filterData) {
            setArraySearch(filterData)
        }
    }, [])

    const GoToProduct = (name, img, description, price) => {
        navigation.navigate('product', {name, img, description, price})
      } 
    


    return(
        <Div>
            {props.cart &&
            <InputView>
                <Input placeholder="Saiba se o produto já está no carrinho" onChangeText={f=>setUserSearch(f)} />
                    <IconBtn onPress={() => alert('Icon pressed')}>
                        <SearchIcon width="25" height="25" fill="#000" />
                    </IconBtn>
            </InputView>
            }

            {filterData.map((item, k) => (
                <ItemView key={k} underlayColor="rgba(0, 0, 0, 0.1)" onPress={() => GoToProduct(item.name, item.avatar, item.description, item.price)}>
                    <ItemRow jContent={props.home || props.search ? 'flex-start':'space-between'}>

                        <Avatar source={item.avatar} />

                        <ItemHeader>
                            <Name>{item.name}</Name>
                            <Description numberOfLines={2}>{item.description}</Description>
                            <Price>R$ {parseFloat(item.price).toFixed(2)}</Price>
                        </ItemHeader>

                        {props.cart &&
                            <ItemQntd>
                                <ItemBtnQntd>
                                    <Icon name="angle-up" size={30} onPress={() => setQuantidade(quantidade + 1)}/>
                                </ItemBtnQntd>

                                <ItemQntdValue>{quantidade}</ItemQntdValue>

                                <ItemBtnQntd>
                                    <Icon name="angle-down" size={30} onPress={() => setQuantidade(quantidade - 1)}/>
                                </ItemBtnQntd>
                            </ItemQntd>
                        }
                        
                    </ItemRow>
                </ItemView>
            ))}
        </Div>
    );
}