import React, {useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import Api from '../../Api';

import {
    Container,

    Scroll,

    HeaderView,

    TopView,
    TopImg,
    TopText,
    BottomText,

    StatusView,
    StatusText,

    OrderInfoView,
    
    OrderIdView,
    OrderIdText,

    Flat,

    OrderProductView,
    ProductQtdView,
    ProductQtdText,
    ProductNameText,
    ProductPriceText,

    TotalPriceView,
    PriceView,
    PriceText,

    AdressView,
    AdressText,
    RuaText,
    BairroText,
    ReferenceText,
} from './style';

export default () => {
    const [arrayOrderInfo, setArrayOrderInfo] = useState([{}]);
    
    const route = useRoute();

    let adress = route.params.adress;
    let orderId = route.params.id;
    let subtotal = route.params.subtotal;
    let status = route.params.status;
    let taxa = 5.75; // Número fictício para ser usado como taxa de entrega


    useEffect(() => {
        const getOrder = async () => {

            setArrayOrderInfo([{}]);
            
            let json = await Api.getUserOrdersInfo(orderId);
            
            // Array com as infos do pedido. path do firestore: order.products.products
            setArrayOrderInfo(json[0].order)       
        }
        
        
        getOrder();
    }, [])

    const ArrayFlat = ({data}) => {
        return(
            <OrderProductView>

                <ProductQtdView>
                    <ProductQtdText>{data.quantidade}</ProductQtdText>
                </ProductQtdView>

                <ProductNameText>{data.name} por R$ {parseFloat(data.price).toFixed(2)}</ProductNameText>
                <ProductPriceText>R$ {parseFloat(data.price * data.quantidade).toFixed(2)}</ProductPriceText>

            </OrderProductView>
        );
    }

    return(
        <Container>
            <Flat
                ListHeaderComponent={
                    <>
                        <HeaderView>
                            <TopView>
                                <TopImg source={require('../../assets/img/carne_filter.jpg')} />
                                <TopText>Seu Mercado - Benfica</TopText>
                            </TopView>

                            <BottomText>Realizado as 19:28 - 14/11/2025</BottomText>
                        </HeaderView>

                        <StatusView>
                            {status == 'pendente' ?
                                <StatusText color="#F4D35E">À caminho</StatusText>
                            :
                                <StatusText color="#28AFB0">Pedido entregue às 19:28</StatusText>
                            }
                        </StatusView>

                        <OrderIdView>
                            <OrderIdText>Pedido nº {orderId}</OrderIdText>
                        </OrderIdView>
                    </>
                }

                    showsVerticalScrollIndicator={false}
                    data={arrayOrderInfo}
                    renderItem={({item}) => <ArrayFlat data={item} />}
                    keyExtractor={(item) => item.id}

                ListFooterComponent={
                    <>
                        <TotalPriceView>
                            <PriceView>
                                <PriceText>Subtotal</PriceText>
                                <PriceText>R$ {parseFloat(subtotal).toFixed(2)}</PriceText>
                            </PriceView>

                            <PriceView>
                                <PriceText>Taxa de entrega</PriceText>
                                <PriceText>R$ {parseFloat(taxa).toFixed(2)}</PriceText>
                            </PriceView>

                            <PriceView>
                                <PriceText color="#ea1d2c" weight="bold">Total</PriceText>
                                <PriceText color="#ea1d2c" weight="bold">R$ {parseFloat(subtotal + taxa).toFixed(2)}</PriceText>
                            </PriceView>
                            
                        </TotalPriceView>

                        <AdressView>
                            <AdressText>Endereço de entrega</AdressText>
                            <RuaText>R. {adress.rua}, {adress.number} </RuaText>
                            <BairroText>{adress.bairro}</BairroText>
                            <ReferenceText>{adress.referencia}</ReferenceText>
                        </AdressView>
                    </>
                }
                />  
                    
                

        </Container>
    );
}