import React, {useState, useEffect} from 'react';
import SearchIcon from '../../assets/svg/search.svg';
import SearchList from '../../lists/SearchList';
import {RefreshControl} from 'react-native';

import {
    Container,
    
    InputView,
    Input,

    IconBtn,

    Flat
} from './style';

let array = [
    {id: '1', avatar: require('../../assets/img/carnes/bife.jpg'), name: 'Bife', price: '10,00'},
    {id: '2', avatar: require('../../assets/img/carnes/maminha.jpg'), name: 'Maminha', price: '10,00'},
    {id: '3', avatar: require('../../assets/img/carnes/sobrecoxa.jpg'), name: 'Sobrecoxa', price: '10,00'},
    {id: '4', avatar: require('../../assets/img/carnes/porco.jpg'), name: 'Porco', price: '10,00'},
    {id: '5', avatar: require('../../assets/img/carnes/peixe.jpg'), name: 'Peixe', price: '10,00'},
    {id: '6', avatar: require('../../assets/img/carnes/frango_assado.jpg'), name: 'Frango', price: '10,00'},
];

export default () => {
    const [userSearch, setUserSearch] = useState();
    const [refresh, setRefresh] = useState(false);
    const [array1, setArray] = useState([]);
   
    const filterData = array.filter((item) => {              // Array que será mostrado, pegando o valor digitado do usuário e filtrando para mostrar os que tem
        return item.name.indexOf(userSearch) >=0
    }) 

    useEffect(() => {

		let arrayShuffle = function(arr) {
			let newPos;
			let temp;
			
		for (let i = arr.length - 1; i > 0; i--) {
			newPos = Math.floor(Math.random() * (i + 1));
			temp = arr[i];
			arr[i] = arr[newPos];
			arr[newPos] = temp;
		}
		return arr;
		};

		setArray(arrayShuffle(array));

    }, [])

    const onRefresh = () => {
        setRefresh(true);
    }

    useEffect(() => {

        let arrayShuffle = function(arr) {
			let newPos;
			let temp;
			
		for (let i = arr.length - 1; i > 0; i--) {
			newPos = Math.floor(Math.random() * (i + 1));
			temp = arr[i];
			arr[i] = arr[newPos];
			arr[newPos] = temp;
		}
		return arr;
		};

        setArray(arrayShuffle(array));
        setRefresh(false);
    }, [refresh])

    
    return(
        <Container>
            <Flat
                refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}
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
                data={userSearch ? filterData : array1}
                renderItem={({item}) => <SearchList data={item} />}
                keyExtractor={(item) => item.id}
            />        
        </Container>
    );
}