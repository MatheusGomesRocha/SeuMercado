import React, { useState, useEffect } from 'react';
import PlusIcon from '../../assets/svg/plus.svg';
import auth from '@react-native-firebase/auth';
import Api from '../../Api';
import LoadingView from '../../components/LoadingComponent';
import NoDataIcon from '../../assets/svg/no_data.svg';
import ModalAdress from '../../components/ModalAdress';
import { useNavigation } from '@react-navigation/native';

import { Alert, RefreshControl } from 'react-native';

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
import { set } from 'react-native-reanimated';

export default () => {
    const [check, setCheck] = useState();
    const [adressList, setAdressList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [effect, setEffect] = useState(false);

    const navigation = useNavigation();

    const userId = auth().currentUser.uid;

    useEffect(() => {

            Api.getUserAdress(userId, setAdressList);


        setEffect(false)
    }, [effect])        // Pega a state effect como parâmetro para sempre que ela mudar, fazer um refresh e mostrar os dados atualizados

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000)

    }, [])

    const AdressArray = ({ data }) => {
        return (
            <ItemBtn onLongPress={() => AlertAdress(data.id)} underlayColor="rgba(0, 0, 0, 0.1)" onPress={() => chooseAdress(data.id, data.type, data.bairro, data.rua, data.number, data.reference)} bWidth={check == data.id && '2px'} bColor={check == data.id && '#ea1d2c'}>
                <>
                    <TitleText>{data.type}</TitleText>
                    <RuaText>Rua: {data.rua}, {data.number}</RuaText>
                    <BairroText>Bairro: {data.bairro}</BairroText>
                    <DescriptionText>Referência: {data.reference}</DescriptionText>
                </>
            </ItemBtn>
        );
    }

    const NoAdress = () => {
        return (
            <NoInfoView>
                <NoDataIcon width="200px" height="200px" />
                <NoInfoText>Nenhum endereço cadastrado</NoInfoText>
            </NoInfoView>
        );
    }

    const AlertAdress = (id) => {
        Alert.alert(
            "Excluir",
            "Deseja excluir esse endereço?",
            [
                { text: "Excluir", onPress: () => deleteAdress(id) },
                { text: 'Cancel', style: 'cancel' }
            ],
            { cancelable: false }
        );
    }

    const chooseAdress = (id, type, bairro, rua, number, reference) => {
        Api.setOrderAdress(userId, id, type, bairro, rua, number, reference)
        setCheck(id);
    }

    const openModal = () => {
        setShowModal(true);
    }

    const deleteAdress = (id) => {
        Api.deleteAdress(id, userId, navigation);

        setEffect(true);    // true para o efeito de refresh
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
                                contentContainerStyle={{ margin: 15, paddingBottom: 50 }}
                            />


                        </>
                        :
                        <NoAdress />
                    }

                    <AddBtn onPress={() => openModal()}>
                        <PlusIcon width="40px" height="40px" fill="#fff" />
                    </AddBtn>
                </>
            }


            <ModalAdress
                show={showModal}
                setShow={setShowModal}
                userId={userId}
                setEffect={setEffect}
            />

        </Container>
    );
}