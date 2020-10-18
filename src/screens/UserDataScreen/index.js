import React from 'react';
import AngleRightIcon from '../../assets/svg/angle_right.svg';
import Api from '../../Api';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import { Alert } from 'react-native';

import {
    Container,

    FatherView,

    DefaultBtn,

    LeftView,
    BtnText,
    BtnSmallText,
} from './style'

export default () => {
    const userId = auth().currentUser.uid;

    const navigation = useNavigation();

    const alertHistory = () => {
        Alert.alert(
            "Excluir",
            "Deseja excluir esse endereço?",
            [
                { text: "Excluir", onPress: () => deleteHistory() },
                { text: 'Cancel', style: 'cancel' }
            ],
            { cancelable: false }
        );
    }

    const deleteHistory = () => {
        Api.deleteFinishOrder(userId);
    }

    return (
        <Container>
            <FatherView>
                <DefaultBtn>
                    <>
                        <LeftView>
                            <BtnText>Informações pessoais</BtnText>
                            <BtnSmallText>Nome e CPF</BtnSmallText>
                        </LeftView>
                        <AngleRightIcon width="15" height="15" />
                    </>
                </DefaultBtn>

                <DefaultBtn>
                    <>
                        <LeftView>
                            <BtnText>Dados para Contato</BtnText>
                            <BtnSmallText>Email e telefone</BtnSmallText>
                        </LeftView>
                        <AngleRightIcon width="15" height="15" />

                    </>
                </DefaultBtn>

                <DefaultBtn onPress={() => alertHistory()}>
                    <>
                        <LeftView>
                            <BtnText>Deletar Histórico</BtnText>
                            <BtnSmallText>Deleta o histórico dos seus pedidos</BtnSmallText>
                        </LeftView>
                    </>
                </DefaultBtn>

                <DefaultBtn>
                    <>
                        <LeftView>
                            <BtnText>Dados para Contato</BtnText>
                            <BtnSmallText>Email e telefone</BtnSmallText>
                        </LeftView>
                        <AngleRightIcon width="15" height="15" />

                    </>
                </DefaultBtn>

            </FatherView>
        </Container>
    );
}