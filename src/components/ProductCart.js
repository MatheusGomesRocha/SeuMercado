import React, {useState} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Div = styled.View`
    background-color: #fff;
`;

const ItemView = styled.View`
    min-height: 100px;
    borderBottomWidth: 1px;
    borderBottomColor: rgba(0, 0, 0, 0.1);
    width: 100%;
    padding: 20px 10px 20px 10px;
`;

const ItemRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
const ItemHeader = styled.View`
    flex-direction: row;

`;
const ItemColumn = styled.View`
    margin-left: 10px;
    justify-content: center;
`;
const Avatar = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 10px;
`;
const Name = styled.Text`
    font-size: 18px;
`;
const Price = styled.Text`
    font-size: 18px;
    color: #5CAB7D;
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
    {avatar: require('../assets/img/geral_filter.jpg'), name: 'Teste', price: '10,00'},
    {avatar: require('../assets/img/geral_filter.jpg'), name: 'Teste', price: '10,00'},
    {avatar: require('../assets/img/geral_filter.jpg'), name: 'Teste', price: '10,00'},
];

export default () => {
    const [quantidade, setQuantidade] = useState(1);

    return(
            <Div>
            {array.map((item, k) => (
                <ItemView key={k} underlayColor="rgba(0, 0, 0, 0.1)" onPress={() => alert('hello world')}>
                    <ItemRow>

                        <ItemHeader>
                            <Avatar source={item.avatar} />

                            <ItemColumn>
                                <Name>{item.name}</Name>
                                <Price>R$ {item.price}</Price>

                            </ItemColumn>

                        </ItemHeader>

                        <ItemQntd>
                            <ItemBtnQntd>
                                <Icon name="angle-up" size={30} onPress={() => setQuantidade(quantidade + 1)}/>
                            </ItemBtnQntd>

                            <ItemQntdValue>{quantidade}</ItemQntdValue>

                            <ItemBtnQntd>
                                <Icon name="angle-down" size={30} onPress={() => setQuantidade(quantidade - 1)}/>
                            </ItemBtnQntd>
                        </ItemQntd>
                    </ItemRow>
                    
                </ItemView>
            ))}
        </Div>

    );
}