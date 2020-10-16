import React, { useState, useEffect } from 'react';
import PlusIcon from '../../assets/svg/plus.svg';
import auth from '@react-native-firebase/auth';
import Api from '../../Api';

import {
    Container,

    Flat,

    ItemBtn,
    TitleText,
    RuaText,
    BairroText,
    DescriptionText,

    AddBtn,
} from './style';

let array = [
    { id: '1421', title: 'Casa', rua: 'Santos Dumont', number: '3008', bairro: 'Tabapuazinho' },
    { id: '121', title: 'Casa', rua: 'Santos Dumont', number: '3008', bairro: 'Tabapuazinho' },
]
export default () => {
    const [check, setCheck] = useState();
    const [adressList, setAdressList] = useState();

    const userId = auth().currentUser.uid;

    useEffect(() => {
        Api.getUserAdress(userId, setAdressList);
        console.log(adressList);
    }, [])

    const AdressArray = ({ data }) => {
        return (
            <ItemBtn underlayColor="rgba(0, 0, 0, 0.1)" onPress={() => chooseAdress(data.id)} bWidth={check == data.id && '2px'} bColor={check == data.id && '#ea1d2c'}>
                <>
                    <TitleText>{data.title}</TitleText>
                    <RuaText>R. {data.rua}, {data.number}</RuaText>
                    <BairroText>{data.bairro}</BairroText>
                    <DescriptionText>Bessa X Ap-02 Arena Bola na rede ou uma indústria</DescriptionText>
                </>
            </ItemBtn>
        );
    }

    const chooseAdress = (id) => {
        setCheck(id);
    }

    return (
        <Container>
            <Flat
                showsVerticalScrollIndicator={false}
                data={adressList}
                renderItem={({ item }) => <AdressArray data={item} />}
                keyExtractor={(item) => item.id}
            />

            <AddBtn>
                <PlusIcon width="40px" height="40px" fill="#fff" />
            </AddBtn>
        </Container>
    );
}