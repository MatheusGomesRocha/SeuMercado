import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
    Container,

    BackgroundImg,

    BackgroundView,

    ViewBtn,

    DefaultBtn,
    BtnText,
} from './style';

export default () => {
    const navigation = useNavigation();

    return(
        <Container>
            <BackgroundImg source={require('../../assets/img/prev_login.jpg')} >
                <BackgroundView>
                    <ViewBtn>
                        <DefaultBtn>
                            <BtnText>Cadastro</BtnText>
                        </DefaultBtn>
                        <DefaultBtn onPress={() => navigation.navigate('login')}>
                            <BtnText>Login</BtnText>
                        </DefaultBtn>
                    </ViewBtn>
                </BackgroundView>
            </BackgroundImg>
        </Container>
    );
}