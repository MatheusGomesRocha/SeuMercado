import React, {useState, useEffect} from 'react';
import OrderFinish from '../../components/OrderFinish';
import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import Api from '../../Api';
import Shopping from '../../assets/svg/shopping_app.svg';
import LoginSvg from '../../assets/svg/login.svg';
import {useNavigation} from '@react-navigation/native';
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
    const [matrizOrder, setMatrizOrder] = useState([{}]);
    const [subtotal, setSubtotal] = useState([]);
    const [adressOrder, setAdressOrder] = useState([]);
    const [loading, setLoading] = useState(true);

    const userLogin = useSelector(state=>state.user.email);
    
    const navigation = useNavigation();

    if(userLogin) {
        const userId = auth().currentUser.uid;

        useEffect(() => {
            const getOrderFinish = async () => {
                let status = 'entregue';
                setArrayOrder([]);
                
                let json = await Api.getUserOrders(userId, status);           
                setArrayOrder(json)        // Pegando geral do pedido (total a pagar, quantidade total, id do pedido)

                setMatrizOrder(json.order);          // Pegando infos do pedido. Enviar isso aqui para o component no "flat" e lá enviar para a próxima tela.
                                                                    // Para acessa-lo é só mandar pra tela Details como data e pegar pelo nome dos campos. Ex: data.name, data.price;
                            
                setAdressOrder(json.adress);     // Infos do Endereço ou arrayOrder.adress
                
                setSubtotal(json.subtotal);    

                // Caso algum dia isso dê erro, adicione um índice da matriz após o json. Ex: json[0].order

            }
    
            getOrderFinish();
        }, [])    
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, [])

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
                    <DefaultText>Faça suas compras</DefaultText>
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
                                    renderItem={({item}) => <OrderFinish data={item} adress={arrayOrder[0].adress} infoOrder={matrizOrder} finish={true}/>}
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