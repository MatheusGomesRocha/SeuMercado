import React, { useState, useEffect } from 'react';
import OrderFinish from '../../components/OrderFinish';
import { useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth';
import Api from '../../Api';
import Shopping from '../../assets/svg/shopping_app.svg';
import LoginSvg from '../../assets/svg/login.svg';
import { useNavigation } from '@react-navigation/native';
import LoadingScreen from '../../components/LoadingComponent';


import {
    Container,

    Flat,

    NoInfoView,
    NoInfoText,
    DefaultBtn,
    DefaultText,
} from './style';

export default () => {
    const [arrayOrder, setArrayOrder] = useState([]);
    const [loading, setLoading] = useState(true);

    const userLogin = useSelector(state => state.user.email);

    const navigation = useNavigation();

    if (userLogin) {
        const userId = auth().currentUser.uid;

        useEffect(() => {
            let status = 'pendente';
            setArrayOrder([]);

            Api.getUserOrders(userId, status, setArrayOrder);
        }, [])
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, [])

    const NoUserLogin = () => {
        return (
            <NoInfoView>
                <LoginSvg width="200px" height="200px" />
                <NoInfoText>Para ver seus pedidos em andamento, por favor faça o Login</NoInfoText>
            </NoInfoView>
        );
    }

    // Quando não tiver nenhum produto e o usuário clicar no botão, será redirecionado para os itens filtrados em Geral
    const NoProduct = () => {
        let type = 'Geral';
        let img = require('../../assets/img/geral_filter.jpg');
        return (
            <NoInfoView>
                <Shopping width="200px" height="200px" />
                <NoInfoText>Você não tem pedidos em andamento</NoInfoText>
                <DefaultBtn onPress={() => navigation.navigate('filter', { type, img })}>
                    <DefaultText>Faça suas compras</DefaultText>
                </DefaultBtn>
            </NoInfoView>
        );
    }


    return (
        <Container>
            {!loading ?
                <>
                    {userLogin ?
                        <>
                            {arrayOrder.length > 0 ?
                                <>
                                    <Flat

                                        data={arrayOrder}
                                        renderItem={({ item }) => <OrderFinish data={item} />}
                                        keyExtractor={(item) => item.id}
                                    />
                                </>
                                :
                                <NoProduct />
                            }
                        </>
                        :
                        <NoUserLogin />
                    }
                </>
                :
                <LoadingScreen />
            }
        </Container>
    );
}