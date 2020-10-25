import React from 'react';
import AngleRightIcon from '../../assets/svg/angle_right.svg';
import Api from '../../Api';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {connect} from 'react-redux';


import { Alert } from 'react-native';

import {
    Container,

    FatherView,

    DefaultBtn,

    LeftView,
    BtnText,
    BtnSmallText,
} from './style'

function UserDataScreen (props) {
    const userId = auth().currentUser.uid;

    const navigation = useNavigation();

    const alertHistory = () => {
        Alert.alert(
            "Excluir",
            "Tem certeza que deseja excluir todo seu histórico?",
            [
                { text: "Excluir", onPress: () => deleteHistory() },
                { text: 'Cancel', style: 'cancel' }
            ],
            { cancelable: false }
        );
    }

    const alertAccount = () => {
        Alert.alert(
            "Excluir",
            "Tem certeza que deseja excluir sua conta?",
            [
                { text: "Excluir", onPress: () => deleteAccount() },
                { text: 'Cancel', style: 'cancel' }
            ],
            { cancelable: false }
        );
    }

    const deleteHistory = () => {
        Api.deleteFinishOrder(userId);
        navigation.navigate('order')
    }


    return (
        <Container>
            <FatherView>
                <DefaultBtn onPress={() => navigation.navigate('userprofile')}>
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

                <DefaultBtn onPress={() => alertAccount()}>
                    <>
                        <LeftView>
                            <BtnText>Deletar essa conta</BtnText>
                            <BtnSmallText>Deleta a sua conta</BtnSmallText>
                        </LeftView>
                    </>
                </DefaultBtn>

            </FatherView>
        </Container>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        SignOut:(SignOut)=>dispatch({type:'SIGN_OUT'}),     // Log Out
    };
}

export default connect(null, mapDispatchToProps) (UserDataScreen);