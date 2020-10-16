import React, {useState, useEffect} from 'react';
import ProductCart from '../../components/ProductCart';
import Api from '../../Api';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
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

    const userLogin = useSelector(state=>state.user.email);

    const navigation = useNavigation();

    var subtotal = 0;       // Variável que pega o valor total dos produtos que estão no carrinho
    var quantidadeTotal = 0;

    if(arrayCart) {
        arrayCart.forEach(item => {     // Função foreach que pega o subtotal
            subtotal += item.price * item.quantidade
            quantidadeTotal += item.quantidade;
        })
    }
    
    

    if(userLogin) {
        const userId = auth().currentUser.uid;

        useEffect(() => {
            const getProducts = () => {
                setArrayCart([]);
                
                let json = Api.getProductsCart(userId, setArrayCart);
                setArrayCart(json)
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
        }, 2000)
    }, [])


    const NoProduct = () => {
        return(
            <NoInfoView>
                <EmptyCart width="200px" height="200px" />
                <NoInfoText>O seu carrinho está vazio </NoInfoText>
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

    const setUserOrder = async () => {
        const userId = auth().currentUser.uid;

        var userName = '';

        userInfo.forEach(item => {
            userName = item.name;
        })

        let res = await Api.setUserOrder(userId, userName, arrayCart, subtotal, quantidadeTotal, navigation);

        let del = await Api.deleteCart(userId);
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
                                            renderItem={({item}) => <ProductCart data={item} />}
                                            keyExtractor={(item) => item.id}
                                        /> 
                                    </FlatView> 
                                    
                                    <DefaultBtn onPress={setUserOrder}>
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