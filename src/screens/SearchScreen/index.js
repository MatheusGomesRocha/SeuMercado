import React, {useState, useEffect} from 'react';
import SearchIcon from '../../assets/svg/search.svg';
import SearchList from '../../lists/SearchList';

import {
    Container,
    
    InputView,
    Input,

    IconBtn,

    Flat
} from './style';

let array = [
    {id: '1', avatar: require('../../assets/img/geral_filter.jpg'), name: 'Pernil', price: '10,00'},
    {id: '2', avatar: require('../../assets/img/geral_filter.jpg'), name: 'Teste', price: '10,00'},
    {id: '3', avatar: require('../../assets/img/geral_filter.jpg'), name: 'Teste', price: '10,00'},
    {id: '4', avatar: require('../../assets/img/geral_filter.jpg'), name: 'Teste', price: '10,00'},
    {id: '5', avatar: require('../../assets/img/geral_filter.jpg'), name: 'Teste', price: '10,00'},
    {id: '6', avatar: require('../../assets/img/geral_filter.jpg'), name: 'Teste', price: '10,00'},
];

export default () => {
    const [userSearch, setUserSearch] = useState();

   
    const filterData = array.filter((item) => {              // Array que será mostrado, pegando o valor digitado do usuário e filtrando para mostrar os que tem
        return item.name.indexOf(userSearch) >=0
    }) 

    return(
        <Container>
            <Flat
                ListHeaderComponent={
                    <>
                        <InputView>
                            <Input placeholder="Tipo ou nome do produto" onChangeText={f=>setUserSearch(f)} />
                            <IconBtn onPress={() => alert('Icon pressed')}>
                                <SearchIcon width="25" height="25" fill="#000" />
                            </IconBtn>
                        </InputView>
                    </>
                }
                data={userSearch ? filterData : array}
                renderItem={({item}) => <SearchList data={item} />}
                keyExtractor={(item) => item.id}
            />        
        </Container>
    );
}