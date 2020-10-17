import React, { useState, useEffect } from 'react';
import PlusIcon from '../../assets/svg/plus.svg';
import auth from '@react-native-firebase/auth';
import Api from '../../Api';
import LoadingView from '../../components/LoadingComponent';
import NoDataIcon from '../../assets/svg/no_data.svg';

import {
    Container,

    Flat,

    ItemBtn,
    TitleText,
    RuaText,
    BairroText,
    DescriptionText,

    AddBtn,

    NoInfoView,
    NoInfoText,
} from './style';

let array = [
    { id: '1421', title: 'Casa', rua: 'Santos Dumont', number: '3008', bairro: 'Tabapuazinho' },
    { id: '121', title: 'Casa', rua: 'Santos Dumont', number: '3008', bairro: 'Tabapuazinho' },
]
export default () => {
    const [check, setCheck] = useState();
    const [adressList, setAdressList] = useState([]);
    const [loading, setLoading] = useState(true);

    const userId = auth().currentUser.uid;

    useEffect(() => {
        Api.getUserAdress(userId, setAdressList);
        console.log(adressList);
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)
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

    const NoAdress = () => {
        return (
            <NoInfoView>
                <NoDataIcon width="200px" height="200px" />
                <NoInfoText>O seu carrinho está vazio </NoInfoText>
            </NoInfoView>
        );
    }

    const chooseAdress = (id) => {
        setCheck(id);
    }

    return (
        <Container>
            {loading ?
                <LoadingView />
            :
                <>
                    {adressList.length > 0 ?
                        <>
                            <Flat
                                showsVerticalScrollIndicator={false}
                                data={adressList}
                                renderItem={({ item }) => <AdressArray data={item} />}
                                keyExtractor={(item) => item.id}
                                contentContainerStyle={{ margin: 15 }}
                            />


                        </>
                    :
                        <NoAdress />
                    }

                    <AddBtn>
                        <PlusIcon width="40px" height="40px" fill="#fff" />
                    </AddBtn>
                </>
            }

        </Container>
    );
}