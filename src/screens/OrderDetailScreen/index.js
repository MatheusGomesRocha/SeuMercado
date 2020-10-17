import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import Api from '../../Api';
import LoadingScreen from '../../components/LoadingComponent';

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
    TitleText,
    RuaText,
    BairroText,
    ReferenceText,
} from './style';

export default () => {
    const [arrayOrderInfo, setArrayOrderInfo] = useState([]);
    const [adress, setAdress] = useState([]);
    const [loading, setLoading] = useState(true);
    const [subtotal, setSubtotal] = useState();
    const [status, setStatus] = useState();

    const route = useRoute();

    let orderId = route.params.id;
    let idSplit = route.params.id.substr(0, 4);
    let taxa = 5.75; // Número fictício para ser usado como taxa de entrega


    useEffect(() => {
        setArrayOrderInfo([]);
        setAdress([]);

        Api.getUserOrdersInfo(orderId, setArrayOrderInfo, setAdress, setSubtotal, setStatus);
        // Enviando states de Array para setar os produtos nela
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, [])

    const ArrayFlat = ({ data }) => {
        return (
            <OrderProductView>

                <ProductQtdView>
                    <ProductQtdText>{data.quantidade}</ProductQtdText>
                </ProductQtdView>

                <ProductNameText>{data.name} por R$ {parseFloat(data.price).toFixed(2)}</ProductNameText>
                <ProductPriceText>R$ {parseFloat(data.price * data.quantidade).toFixed(2)}</ProductPriceText>

            </OrderProductView>
        );
    }

    const ArrayAdress = ({ data }) => {
        return (
            <AdressView>
                <AdressText>Endereço de entrega</AdressText>

                <TitleText>{data.type}</TitleText>
                <RuaText>R. {data.rua}, {data.number} </RuaText>
                <BairroText>{data.bairro}</BairroText>
                <ReferenceText>{data.reference}</ReferenceText>
            </AdressView>
        );
    }
    return (
        <Container>
            {loading ?
                <LoadingScreen />
                :
                <>
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
                                    <OrderIdText>Pedido nº {idSplit}</OrderIdText>
                                </OrderIdView>
                            </>
                        }

                        showsVerticalScrollIndicator={false}
                        data={arrayOrderInfo}
                        renderItem={({ item }) => <ArrayFlat data={item} />}
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

                                <Flat
                                    showsVerticalScrollIndicator={false}
                                    data={adress}
                                    renderItem={({ item }) => <ArrayAdress data={item} />}
                                    keyExtractor={(item) => item.id}
                                />
                            </>
                        }
                    />
                </>
            }




        </Container>
    );
}