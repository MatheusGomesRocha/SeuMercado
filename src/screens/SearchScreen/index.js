import React, {useState, useEffect} from 'react';
import SearchIcon from '../../assets/svg/search.svg';
import ProductDefault from '../../components/ProductDefault';
import {RefreshControl, ActivityIndicator} from 'react-native';
import Api from '../../Api';
import LoadingScreen from '../../components/LoadingComponent';

import {
    Container,
    
    LoadingView,

    Flat,

    InputView,
    Input,
    IconBtn,
} from './style';


export default () => {
    const [userSearch, setUserSearch] = useState();
    const [refresh, setRefresh] = useState(false);
    const [array1, setArray] = useState([]);
    const [productArray, setProductArray] = useState([]);
    const [loading, setLoading] = useState(true);

    const filterData = productArray.filter((item) => {              // Array que será mostrado, pegando o valor digitado do usuário e filtrando para mostrar os que tem
        if(userSearch) {
            return item.name.indexOf(userSearch) >=0
        } else {
            return productArray;
        }
    }) 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, [])

    useEffect(() => {
        const getProducts = async () => {
            setProductArray([]);
            
            let json = await Api.getProducts();
            setProductArray(json)
        }

        getProducts();
    }, [])

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

        setProductArray(arrayShuffle(productArray));
        setRefresh(false);
    }, [refresh])

    const onRefresh = () => {
        setRefresh(true);
    }
    
    return(
        <Container>
            {loading ?
                <LoadingScreen />
            :
                <>
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
                        data={filterData}
                        renderItem={({item}) => <ProductDefault data={item} />}
                        keyExtractor={(item) => item.id}
                    />  
                </>      
            }
        </Container>
    );
}