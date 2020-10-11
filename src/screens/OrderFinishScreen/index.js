import React, {useState, useEffect} from 'react';
import OrderFinish from '../../components/OrderFinish';
import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import Api from '../../Api';
import Shopping from '../../assets/svg/shopping_app.svg';
import LoginSvg from '../../assets/svg/login.svg';
import {useNavigation} from '@react-navigation/native';

import {ActivityIndicator} from 'react-native';

import {
    Container,
    
    Flat,

    NoInfoView,
    NoInfoText,

    DefaultBtn,
    DefaultText,
} from './style';

export default () => {
    const userLogin = useSelector(state=>state.user.email);
    const [arrayOrder, setArrayOrder] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    if(userLogin) {
        const userId = auth().currentUser.uid;

        useEffect(() => {
            const getOrderFinish = async () => {
                setArrayOrder([]);
                
                let json = await Api.getOrderFinish(userId);
                setArrayOrder(json)
            }
    
            getOrderFinish();
        }, [])
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, [])

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
                <NoInfoText>Para ver seus pedidos anteriores, por favor faça o Login</NoInfoText>
            </NoInfoView>
        );
    }

    const NoProduct = () => {
        let type = 'Geral';
        let img = require('../../assets/img/geral_filter.jpg');
        return(
            <NoInfoView>
                <Shopping width="200px" height="200px" />
                <NoInfoText>Você não tem pedidos anteriores</NoInfoText>
                <DefaultBtn onPress={() => navigation.navigate('filter', {type, img})}>
                    <DefaultText>Ver Produtos</DefaultText>
                </DefaultBtn>
            </NoInfoView>
        );
    }


    return(
        <Container>
            {!loading ?
            <>
                {userLogin ?
                    <>
                        {arrayOrder.length > 0 ?
                            <>
                                <Flat
                                    
                                    data={arrayOrder}
                                    renderItem={({item}) => <OrderFinish data={item} />}
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