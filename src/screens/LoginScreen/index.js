import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import ArrowLeft from '../../assets/svg/arrow_left.svg';

import {
    Container,
    
    IconBtn,

    Input,

    Btn,
    BtnText,
} from './style';

export default () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState();
    const [pass, setPass] = useState();

    return(
        <Container>
            <IconBtn onPress={() => navigation.goBack()} underlayColor="rgba(0, 0, 0, 0.2)">
                <ArrowLeft width={25} height={25} fill="#000"/>
            </IconBtn>

            <Input placeholder="Email" onChangeText={e=>setEmail(e)} />
            <Input placeholder="Senha" onChangeText={p=>setPass(p)} />

            <Btn>
                <BtnText>Finalizar</BtnText>
            </Btn>
        </Container>
    );
}