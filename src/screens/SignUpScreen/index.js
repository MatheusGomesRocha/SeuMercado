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

    Scroll,

    AllView,

    InputView,
    Input,
    BtnEye,

    BtnSignUp,
    BtnSignUpText,

    OtherSignUpView,
    AllLineView,
    LineView, 
    LineText,
    OptionSignUpView,

    LoginView,
    LoginText,        
    LoginBtn,       
} from './style';

function SignUpScreen(props) {
    const navigation = useNavigation();

    const [name, setName] = useState();
    const [cpf, setCpf] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [confirmPass, setConfirmPass] = useState();

    const [securePass, setSecurePass] = useState(true)
    const [secureConfirmPass, setSecureConfirmPass] = useState(true)

    const SignUp = async () => {
        let res = await Api.signUp(name, email, cpf, pass, navigation);

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
            <Scroll>
                <AllView>
                    <InputView>
                        <Icon style={{marginLeft: 10}} name="user" size={25} />
                        <Input placeholder="Seu nome" onChangeText={n=>setName(n)} />
                    </InputView>

                    <InputView>
                        <Icon style={{marginLeft: 10}} name="user" size={25} />
                        <Input keyboardType="numeric" placeholder="CPf" onChangeText={c=>setCpf(c)} />
                    </InputView>

                    <InputView>
                        <Icon style={{marginLeft: 10}} name="user" size={25} />
                        <Input keyboardType="email-address" placeholder="Email" onChangeText={e=>setEmail(e)} />
                    </InputView>

                    <InputView>
                        <Icon style={{marginLeft: 10}} name="lock" size={25} />
                        <Input secureTextEntry={securePass} placeholder="Senha" onChangeText={p=>setPass(p)} />
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

                    <InputView>
                        <Icon style={{marginLeft: 10}} name="lock" size={25} />
                        <Input onSubmitEditing={SignUp} secureTextEntry={secureConfirmPass} placeholder="Confime sua senha" onChangeText={cp=>setConfirmPass(cp)} />
                        {secureConfirmPass ?
                        <>
                            <BtnEye onPress={() => setSecureConfirmPass(false)}>
                                <EyeOn fill="#ea1d2c" width={30} height={30} style={{marginRight: 10}}/>
                            </BtnEye>
                        </>
                        :
                        <>
                            <BtnEye onPress={() => setSecureConfirmPass(true)}>
                                <EyeOff fill="#ea1d2c" width={30} height={30} style={{marginRight: 10}}/>
                            </BtnEye>
                        </>
                        }
                    </InputView>
                </AllView>

                <AllView>
                    <OtherSignUpView>
                        <AllLineView>
                            <LineView></LineView>
                            <LineText>ou cadastre-se usando</LineText>
                            <LineView></LineView>
                        </AllLineView>
                        <OptionSignUpView>
                            <Google width={35} height={35} fill="#000" />
                            <Facebook style={{marginLeft: 25}} width={35} height={35} fill="#000" />
                            <Whatsapp style={{marginLeft: 25}} width={35} height={35} fill="#000" />
                        </OptionSignUpView>
                    </OtherSignUpView>
                </AllView>
            

                <AllView>
                    <LoginView>
                        <LoginText>Já possui uma conta? </LoginText>
                        <LoginBtn onPress={() => navigation.goBack()} >
                            <LoginText style={{textDecorationLine: 'underline', fontWeight: 'bold', color: '#ea1d2c'}}>Fazer login</LoginText>
                        </LoginBtn>
                    </LoginView>
                </AllView>
            
            </Scroll>
            
            <BtnSignUp onPress={SignUp} bgColor={pass && pass.length >= 6 && email && name && cpf && pass == confirmPass ? '#ea1d2c' : '#aaa'} disabled={pass && pass.length >= 6 && email && name && cpf && pass == confirmPass ? false : true}>
                <BtnSignUpText>Finalizar</BtnSignUpText>
            </BtnSignUp>
            
        </Container>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        setEmail:(email)=>dispatch({type:'SET_EMAIL', payload: {email}})        // Seta o email no redux
    };
}

export default connect(null, mapDispatchToProps) (SignUpScreen);