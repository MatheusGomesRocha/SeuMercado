import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchIcon from '../assets/svg/search.svg';
import {useNavigation} from '@react-navigation/native';
import Api from '../Api';
import {useSelector} from 'react-redux';
import {Alert} from 'react-native';

const Div = styled.View`
    margin: 0 15px 0 15px;
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
const ItemHeader = styled.View`
    width: 70%;
    margin-left: 25px;
`;
const Avatar = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 10px;
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


export default ({data}, props) => {
    const navigation = useNavigation();
    const userLogin = useSelector(state=>state.user.email);

    const [quantidade, setQuantidade] = useState(1);
    const [userSearch, setUserSearch] = useState();
    const [products, setProducts] = useState([]);
    const [arraySearch, setArraySearch] = useState(products);

    const filterData = products.filter((item) => {              // Array que será mostrado, pegando o valor digitado do usuário e filtrando para mostrar os que tem
        if(userSearch) {
            return item.name.indexOf(userSearch) >=0
        } else {
            return products;
        }
    }) 

    useEffect(() => {
        if(filterData) {
            setArraySearch(filterData)
        }
    }, [])

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
                    <Avatar source={data.img && {uri:data.img}} />

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