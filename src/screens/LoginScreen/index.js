import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import ArrowLeft from '../../assets/svg/arrow_left.svg';
import EyeOff from '../../assets/svg/eye_off.svg';
import EyeOn from '../../assets/svg/eye_on.svg';

import {
    Container,
    
    IconBtn,

    InputView,
    Input,

    BtnLogin,
    BtnLoginText,

    ForgotBtn,
    ForgotText,

    OtherLoginView,

    RegisterView,
    RegisterText,        
    RegisterBtn,       
} from './style';

export default () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState();
    const [pass, setPass] = useState();

    return(
        <Container>

            <InputView>
                <Icon style={{marginLeft: 10}} name="user" size={25} />
                <Input placeholder="Email" onChangeText={e=>setEmail(e)} />
            </InputView>

            <InputView>
                <Icon style={{marginLeft: 10}} name="lock" size={25} />
                <Input secureTextEntry={true} placeholder="Senha" onChangeText={p=>setPass(p)} />
                {pass ?
                <EyeOff fill="#000" width={30} height={30} style={{marginRight: 10}}/>
                :
                <EyeOn fill="#000" width={30} height={30} style={{marginRight: 10}}/>
                }
            </InputView>

            <ForgotBtn onPress={() => alert('forgot password')}>
                <ForgotText>Esqueceu a senha?</ForgotText>
            </ForgotBtn>

            <OtherLoginView>
                
            </OtherLoginView>

            <RegisterView>
                <RegisterText>Não tem uma conta?</RegisterText>
                <RegisterBtn onPress={() => alert('Sign Up')}>
                    <RegisterText style={{textDecorationLine: 'underline', fontWeight: 'bold'}}> Cadastre-se</RegisterText>
                </RegisterBtn>
            </RegisterView>

            <BtnLogin bgColor={pass ? '#ea1d2c' : '#aaa'} onPress={() => alert('log in')} disabled={pass ? false : true}>
                <BtnLoginText>Login</BtnLoginText>
            </BtnLogin>

        </Container>
    );
}