import React from 'react';
import {connect, useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import FavoriteIcon from '../../assets/svg/favorite_empty.svg';

import {
    Container,
    
    Scroll,

    FatherView,

    HeaderView,
    HeaderRowView,
    HeaderText,
    GoToLoginBtn,
    GoToLoginText,

    HeaderLoginView,

    BtnView,
    DefaultBtn,
    LeftView,
    BtnText,
    BtnSmallText,
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

    let emailSplit = email.split('@')[0];     // Quebrando email para pegar o nome antes do @

    return(
        <Container>
            <Scroll>
                <FatherView>
                    {!email ?
                        <HeaderView>
                            <HeaderRowView>
                                <HeaderText numberOfLines={2}>Falta pouco para começar a fazer seus pedidos</HeaderText>
                            </HeaderRowView>
                            <GoToLoginBtn onPress={() => navigation.navigate('login')}>
                                <GoToLoginText>Entrar ou Cadastrar</GoToLoginText>
                            </GoToLoginBtn>
                        </HeaderView>
                    : 
                        <HeaderLoginView>
                            <DefaultBtn style={{borderBottomColor: '#aaa', height: 100}}>
                                <>
                                    <FavoriteIcon width="25" height="25" fill="#333" />
                                    <LeftView>
                                            <BtnText>{emailSplit}</BtnText>
                                            <BtnSmallText>Meus dados</BtnSmallText>
                                    </LeftView>
                                </>
                            </DefaultBtn>
                        </HeaderLoginView>
                    }

                    <BtnView>
                        <DefaultBtn>
                            <>
                                <LeftView>
                                    <BtnText>Endereços</BtnText>
                                    <BtnSmallText>Meus endereços cadastrados</BtnSmallText>
                                </LeftView>
                            </>
                        </DefaultBtn>

                        <DefaultBtn>
                            <>
                                <FavoriteIcon width="25" height="25" fill="#333" />
                                <LeftView>
                                    <BtnText>Favoritos</BtnText>
                                    <BtnSmallText>Meus produtos favoritos</BtnSmallText>
                                </LeftView>
                            </>
                        </DefaultBtn>

                        <DefaultBtn>
                            <LeftView>
                                <BtnText>Cupons</BtnText>
                                <BtnSmallText>Meus cupons de desconto</BtnSmallText>
                            </LeftView>
                        </DefaultBtn>


                        {email?
                            <>
                                <DefaultBtn>
                                    <BtnText>Conversas</BtnText>
                                </DefaultBtn>

                                <DefaultBtn onPress={SignOut}>
                                        <BtnText>Sair</BtnText>
                                </DefaultBtn>
                            </>
                        : null } 

                    </BtnView>

                </FatherView>

            </Scroll>
            
        </Container>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        SignOut:(SignOut)=>dispatch({type:'SIGN_OUT'}),     // Log Out
    };
}

export default connect(null, mapDispatchToProps) (UserScreen);