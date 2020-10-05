import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import ArrowLeft from '../../assets/svg/arrow_left.svg';
import EyeOff from '../../assets/svg/eye_off.svg';
import EyeOn from '../../assets/svg/eye_on.svg';
import Google from '../../assets/svg/google.svg';
import Facebook from '../../assets/svg/facebook.svg';
import Whatsapp from '../../assets/svg/whatsapp.svg';
import Api from '../../Api';
import {connect} from 'react-redux';
import {Alert} from 'react-native';

import {
    Container,
    
    InputView,
    Input,
    BtnEye,

    BtnLogin,
    BtnLoginText,

    ForgotBtn,
    ForgotText,

    OtherLoginView,
    AllLineView,
    LineView, 
    LineText,
    OptionLoginView,

    SignUpView,
    SignUpText,        
    SignUpBtn,       
} from './style';

function LoginScreen(props) {
    const navigation = useNavigation();

    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [securePass, setSecurePass] = useState(true)

    const Login = async () => {
        let res = await Api.login(email, pass, navigation);

        if(res) {
            props.setEmail(email);
        } else {
            Alert.alert(
                "Error",
                "Ocorreu um erro, por favor tente novamente.",
                [
                  { text: "OK" }
                ],
                { cancelable: false }
            );
        }
    }

    return(
        <Container>

            <InputView>
                <Icon style={{marginLeft: 10}} name="user" size={25} />
                <Input keyboardType="email-address" placeholder="Email" onChangeText={e=>setEmail(e)} />
            </InputView>

            <InputView>
                <Icon style={{marginLeft: 10}} name="lock" size={25} />
                <Input onSubmitEditing={Login} secureTextEntry={securePass} placeholder="Senha" onChangeText={p=>setPass(p)} />
                {securePass ?
                <>
                    <BtnEye onPress={() => setSecurePass(false)}>
                        <EyeOn fill="#000" width={30} height={30} style={{marginRight: 10}}/>
                    </BtnEye>
                </>
                :
                <>
                    <BtnEye onPress={() => setSecurePass(true)}>
                        <EyeOff fill="#000" width={30} height={30} style={{marginRight: 10}}/>
                    </BtnEye>
                </>
                }
            </InputView>

            <ForgotBtn onPress={() => alert('forgot password')}>
                <ForgotText>Esqueceu a senha?</ForgotText>
            </ForgotBtn>

            <OtherLoginView>
                <AllLineView>
                    <LineView></LineView>
                    <LineText>ou faça login com</LineText>
                    <LineView></LineView>
                </AllLineView>
                <OptionLoginView>
                    <Google width={35} height={35} fill="#000" />
                    <Facebook style={{marginLeft: 25}} width={35} height={35} fill="#000" />
                    <Whatsapp style={{marginLeft: 25}} width={35} height={35} fill="#000" />
                </OptionLoginView>
            </OtherLoginView>

            <SignUpView>
                <SignUpText>Não tem uma conta? </SignUpText>
                <SignUpBtn onPress={() => navigation.navigate('signup')}>
                    <SignUpText style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>Cadastre-se</SignUpText>
                </SignUpBtn>
            </SignUpView>

            <BtnLogin onPress={Login} bgColor={pass && pass.length >= 6 && email ? '#ea1d2c' : '#aaa'} disabled={pass && pass.length >= 6 && email ? false : true}>
                <BtnLoginText>Login</BtnLoginText>
            </BtnLogin>

        </Container>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        setEmail:(email)=>dispatch({type:'SET_EMAIL', payload: {email}})        // Seta o email no redux
    };
}

export default connect(null, mapDispatchToProps) (LoginScreen);