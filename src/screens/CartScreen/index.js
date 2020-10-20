import React, { useState, useEffect } from 'react';
import ProductCart from '../../components/ProductCart';
import Api from '../../Api';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import EmptyCart from '../../assets/svg/empty_cart.svg';
import LoginSvg from '../../assets/svg/login.svg';
import LoadingScreen from '../../components/LoadingComponent';


import {
    Container,

    FlatView,
    Flat,

    HeaderView,
    HeaderText,

    DefaultBtn,
    DefaultBtnText,

    NoInfoView,
    NoInfoText,
} from './style';

export default () => {
    const [userInfo, setUserInfo] = useState([]);
    const [arrayCart, setArrayCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [id, setId] = useState();

    const userLogin = useSelector(state => state.user.email);

    const navigation = useNavigation();

    var subtotal = 0;       // Variável que pega o valor total dos produtos que estão no carrinho
    var quantidadeTotal = 0;

    if (arrayCart) {
        arrayCart.forEach(item => {     // Função foreach que pega o subtotal
            subtotal += item.price * item.quantidade
            quantidadeTotal += item.quantidade;
        })
    }



    if (userLogin) {
        const userId = auth().currentUser.uid;

        useEffect(() => {
            const getProducts = () => {
                setArrayCart([]);

                let json = Api.getProductsCart(userId, setArrayCart);
                setArrayCart(json)
                setId(userId);

            }

            getProducts();
        }, [])

        useEffect(() => {
            const getUserLogin = async () => {
                let json = await Api.getUserLogin(userId);

                setUserInfo(json);
            }

            getUserLogin();
        }, [])
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, [])


    const NoProduct = () => {
        return (
            <NoInfoView>
                <EmptyCart width="200px" height="200px" />
                <NoInfoText>O seu carrinho está vazio </NoInfoText>
            </NoInfoView>
        );
    }

    const NoUserLogin = () => {
        return (
            <NoInfoView>
                <LoginSvg width="200px" height="200px" />
                <NoInfoText>Para ver seu carrinho, por favor faça o Login</NoInfoText>
            </NoInfoView>
        );
    }

    const setUserOrder = async () => {
        const userId = auth().currentUser.uid;

        var userName = '';
        var userAdress = [];

        userInfo.forEach(item => {
            userName = item.name;
            userAdress = item.adress;
        })

        if (userAdress.length > 0) {
            Api.setUserOrder(userId, userAdress, userName, arrayCart, subtotal, quantidadeTotal, navigation);

            Api.deleteCart(userId);
        } else {
            alert('Escolha um endereço para a entraga antes...')
        }
    }

    return (
        <Container>
            {/* Quando abre a tela vai ferificar o tempo de loading que é 2s */}
            {!loading ?
                <>
                    {/* Depois verifica se tem algum usuário logado */}
                    {userLogin ?
                        <>
                            {/* Depois verifica se o usuário tem algum produto no carrinho */}
                            {arrayCart ?
                                <>
                                    <FlatView>
                                        <Flat
                                            ListHeaderComponent={
                                                <>
                                                    <HeaderView>
                                                        <HeaderText>Total: R$ {parseFloat(subtotal).toFixed(2)}</HeaderText>
                                                    </HeaderView>
                                                </>
                                            }
                                            data={arrayCart}
                                            renderItem={({ item }) => <ProductCart data={item} userId={id} />}
                                            keyExtractor={(item) => item.id}
                                        />
                                    </FlatView>

                                    <DefaultBtn bgColor={arrayCart && subtotal && quantidadeTotal ? '#ea1d2c' : '#aaa'} disabled={arrayCart && subtotal && quantidadeTotal ? false : true} onPress={setUserOrder}>
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