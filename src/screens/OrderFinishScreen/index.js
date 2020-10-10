import React from 'react';

import {
    Container,
    
    Scroll,

    ItemView,

    DateText,

    InfoItemView,

    HeaderView,
    Img,
    ColumnView,
    ColumnTextTop,
    ColumnTextBottom,

    OrderView,
    OrderQtdText,
    OrderNameText,
    OrderPriceText,

    StatusView,
    StatusText,

    BtnView,
    DefaultBtn,
    BtnText,
} from './style';

export default () => {
    return(
        <Container>
            <Scroll>
                <ItemView>
                    <DateText>Quarta, 19/02/2020</DateText>

                    <InfoItemView>

                        <HeaderView>
                            <Img source={require('../../assets/img/carne_filter.jpg')} />

                            <ColumnView>
                                <ColumnTextTop>SeuMercado - Benfica</ColumnTextTop>
                                <ColumnTextBottom>Pedido concluído - 2257</ColumnTextBottom>
                            </ColumnView>
                        </HeaderView>

                        <OrderView>
                            <OrderQtdText> 15 </OrderQtdText>
                            <OrderNameText> Produtos por </OrderNameText>
                            <OrderPriceText> R$ 80.50</OrderPriceText>
                        </OrderView>

                        <StatusView>
                            <StatusText>Status: Entregue</StatusText>
                        </StatusView>

                        <BtnView>
                            <DefaultBtn underlayColor="rgba(0, 0, 0, 0.1)" onPress={() => alert('Report')}>
                                <BtnText>Reportar</BtnText>
                            </DefaultBtn>

                            <DefaultBtn underlayColor="rgba(0, 0, 0, 0.1)" onPress={() => alert('Details')}>
                                <BtnText>Detalhes</BtnText>
                            </DefaultBtn>
                        </BtnView>

                    </InfoItemView>

                    
                </ItemView>
            </Scroll>
        </Container>
    );
}