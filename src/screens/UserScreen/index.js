import React from 'react';
import {connect, useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import FavoriteIcon from '../../assets/svg/favorite_empty.svg';
import CupomIcon from '../../assets/svg/cupom.svg';
import ChatIcon from '../../assets/svg/chat.svg';
import LocationIcon from '../../assets/svg/location.svg';
import AngleRightIcon from '../../assets/svg/angle_right.svg';
import CogIcon from '../../assets/svg/cog.svg';
import PowerOffIcon from '../../assets/svg/power_off.svg';
import HelpIcon from '../../assets/svg/question_mark.svg';
import Icon from 'react-native-vector-icons/FontAwesome';


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

    BtnTopView,
    DefaultBtn,
    LeftView,
    BtnText,
    BtnSmallText,

    BtnBottomView,
    DefaultBottomBtn,
    DefaultBottomText,
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
                                <Icon name="user-circle" size={70} />
                                <HeaderText numberOfLines={2}>Falta pouco para começar a fazer seus pedidos</HeaderText>
                            </HeaderRowView>
                            <GoToLoginBtn onPress={() => navigation.navigate('login')}>
                                <GoToLoginText>Entrar ou Cadastrar</GoToLoginText>
                            </GoToLoginBtn>
                        </HeaderView>
                    : 
                        <HeaderLoginView>
                            <DefaultBtn onPress={() => navigation.navigate('userdata')} style={{borderBottomColor: '#aaa', height: 100}}>
                                <>
                                    <Icon name="user-circle" size={50} />
                                    <LeftView>
                                            <BtnText>{emailSplit}</BtnText>
                                            <BtnSmallText>Meus dados</BtnSmallText>
                                    </LeftView>
                                </>
                            </DefaultBtn>
                        </HeaderLoginView>
                    }

                    <BtnTopView>
                        <DefaultBtn>
                            <>
                                <LocationIcon width="25" height="25" fill="#333" />
                                <LeftView>
                                    <BtnText>Endereços</BtnText>
                                    <BtnSmallText>Meus endereços cadastrados</BtnSmallText>
                                </LeftView>
                                <AngleRightIcon width="15" height="15" />
                            </>
                        </DefaultBtn>

                        <DefaultBtn>
                            <>
                                <FavoriteIcon width="25" height="25" fill="#333" />
                                <LeftView>
                                    <BtnText>Favoritos</BtnText>
                                    <BtnSmallText>Meus produtos favoritos</BtnSmallText>
                                </LeftView>
                                <AngleRightIcon width="15" height="15" />
                            </>
                        </DefaultBtn>

                        <DefaultBtn>
                            <>
                                <CupomIcon width="25" height="25" fill="#333" />
                                <LeftView>
                                    <BtnText>Cupons</BtnText>
                                    <BtnSmallText>Meus cupons de desconto</BtnSmallText>
                                </LeftView>
                                <AngleRightIcon width="15" height="15" />
                            </>
                        </DefaultBtn>


                        {email?
                            <DefaultBtn>
                                <>
                                    <ChatIcon width="25" height="25" fill="#333" />
                                    <LeftView>
                                        <BtnText>Conversas</BtnText>
                                        <BtnSmallText>Minhas conversas</BtnSmallText>
                                    </LeftView>
                                    <AngleRightIcon width="15" height="15" />
                                </>
                            </DefaultBtn>
                        : null } 

                    </BtnTopView>

                    <BtnBottomView>
                        <DefaultBottomBtn>
                            <>
                                <HelpIcon width="25" height="25" fill="#aaa" />
                                <LeftView>
                                    <DefaultBottomText>Ajuda</DefaultBottomText>
                                </LeftView>
                                <AngleRightIcon width="15" height="15" />
                            </>
                        </DefaultBottomBtn>

                        <DefaultBottomBtn>
                            <>
                                <CogIcon width="25" height="25" fill="#aaa" />
                                <LeftView>
                                    <DefaultBottomText>Configurações</DefaultBottomText>
                                </LeftView>
                                <AngleRightIcon width="15" height="15" />
                            </>
                        </DefaultBottomBtn>

                        {email ?
                            <DefaultBottomBtn onPress={SignOut}>
                            <>
                                <PowerOffIcon  width="25" height="25" fill="#aaa" />
                                <LeftView>
                                    <DefaultBottomText>Sair</DefaultBottomText>
                                </LeftView>
                                <AngleRightIcon width="15" height="15" />
                            </>
                            </DefaultBottomBtn>
                        : null}
                        

                    </BtnBottomView>
                    
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