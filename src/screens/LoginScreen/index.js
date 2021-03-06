import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import EmailIcon from '../../assets/svg/email.svg';
import Lock from '../../assets/svg/lock.svg';
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
    InputLine,
    Input,
    BtnEye,
    
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
    
    BtnLogin,
    BtnLoginText,
} from './style';

function LoginScreen(props) {
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [securePass, setSecurePass] = useState(true);

    const navigation = useNavigation();

    const Login = () => {
        Api.login(email, pass, navigation, props.setEmail);
    }

    return(
        <Container>

            <InputView>
                <EmailIcon width="25" height="25" fill="#ea1d2c" style={{marginLeft: 10}} />
                <InputLine></InputLine>
                <Input keyboardType="email-address" placeholder="Email" onChangeText={e=>setEmail(e)} />
            </InputView>

            <InputView>
                <Lock width="25" height="25" fill="#ea1d2c" style={{marginLeft: 10}} />
                <InputLine></InputLine>
                <Input onSubmitEditing={Login} secureTextEntry={securePass} placeholder="Senha" onChangeText={p=>setPass(p)} />
                {securePass ?
                <>
                    <BtnEye onPress={() => setSecurePass(false)}>
                        <EyeOn fill="#ea1d2c" width={30} height={30} style={{marginRight: 10}}/>
                    </BtnEye>
                </>
                :
                <>
                    <BtnEye onPress={() => setSecurePass(true)}>
                        <EyeOff fill="#ea1d2c" width={30} height={30} style={{marginRight: 10}}/>
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
                    <SignUpText style={{textDecorationLine: 'underline', fontWeight: 'bold', color: '#ea1d2c'}}>Cadastre-se</SignUpText>
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