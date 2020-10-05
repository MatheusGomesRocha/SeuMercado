import React from 'react';
import {connect, useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

import {
    Container,

    BtnSignOut,
    BtnText,
} from './style';

function UserScreen(props) {
    const email = useSelector(state=>state.user.email);
    const navigation = useNavigation();

    const SignOut = async () => {    // Função de Logout
        props.SignOut();
        auth().signOut();
        navigation.reset({
            index: 0,
            routes: [
                { name: 'home' }
            ]
        });
    }

    return(
        <Container>
            {email?
                <BtnSignOut onPress={SignOut}>
                    <BtnText>Sair</BtnText>
                </BtnSignOut>
            : null}
        </Container>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        SignOut:(SignOut)=>dispatch({type:'SIGN_OUT'}),     // Log Out
    };
}

export default connect(null, mapDispatchToProps) (UserScreen);