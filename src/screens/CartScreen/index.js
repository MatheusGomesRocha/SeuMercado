import React, {useState, useEffect} from 'react';
import ProductCart from '../../components/ProductCart';
import Api from '../../Api';
import auth from '@react-native-firebase/auth';
import {useSelector} from 'react-redux';
import EmptyCart from '../../assets/svg/empty_cart.svg';
import LoginSvg from '../../assets/svg/login.svg';

import {ActivityIndicator} from 'react-native';

import {
    Container,
    
    Flat,

    DefaultBtn,
    DefaultBtnText,

    NoInfoView,
    NoInfoText,
} from './style';

export default () => {
    const [arrayCart, setArrayCart] = useState([]);
    const [loading, setLoading] = useState(true);

    const userLogin = useSelector(state=>state.user.email);

    if(userLogin) {
        const userId = auth().currentUser.uid;

        useEffect(() => {
            const getProducts = async () => {
                setArrayCart([]);
                
                let json = await Api.getProductsCart(userId);
                setArrayCart(json)
            }
    
            getProducts();
        }, [])
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, [])

    const NoProduct = () => {
        return(
            <NoInfoView>
                <EmptyCart width="200px" height="200px" />
                <NoInfoText>O seu carrinho está vazio</NoInfoText>
            </NoInfoView>
        );
    }

    const LoadingScreen = () => {
        return(
            <NoInfoView>
                <ActivityIndicator size="large" color="#ea1d2c" />
            </NoInfoView>
        );
    }

    const NoUserLogin = () => {
        return(
            <NoInfoView>
                <LoginSvg width="200px" height="200px" />
                <NoInfoText>Para ver seu carrinho, por favor faça o Login</NoInfoText>
            </NoInfoView>
        );
    }


    return(
        <Container>
            {/* Quando abre a tela vai ferificar o tempo de loading que é 2s */}
            {!loading ? 
                <>
                    {/* Depois verifica se tem algum usuário logado */}
                    {userLogin ? 
                        <>
                            {/* Depois verifica se o usuário tem algum produto no carrinho */}
                            {arrayCart.length > 0 ? 
                                <>
                                    <Flat
                                        ListHeaderComponent={
                                            <>
                                                <DefaultBtnText style={{color: '#333'}}>Fazer header com preço de tudo somado</DefaultBtnText>
                                            </>
                                        }
                                        data={arrayCart}
                                        renderItem={({item}) => <ProductCart data={item} />}
                                        keyExtractor={(item) => item.id}
                                    />  
                                    
                                    <DefaultBtn>
                                        <DefaultBtnText>Finalizar Pedido</DefaultBtnText>
                                    </DefaultBtn> 
                                </>
                            :
                                // Se não tiver produto no carrinho, retorna a função que retorna um componente NoProduct
                                <NoProduct />   
                            }        
                        </>

                    :
                        // Se não tiver usuário logado, retorna a função que retorna um componente NoUserLogin
                        <NoUserLogin />
                    }
                </>

            : 
                // Durante os 2s de loading mostra a função de LoadingScreen que é apenas um indicador de carregamento
                <LoadingScreen />
            }        
        </Container>
    );
}