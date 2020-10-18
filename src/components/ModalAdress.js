import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import Api from '../Api';

const Modal = styled.Modal``;

const ModalArea = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: flex-end;
`;
const ModalBody = styled.View`
    justify-content: flex-end;
    background-color: #ea1d2c;
    borderTopLeftRadius: 20px;
    borderTopRightRadius: 20px;
    min-height: 400px;
    padding: 15px;
`;

const CloseBtn = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
`;

const ModalItem = styled.View`
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 15px;
    padding: 10px;
`;
const InputRowView = styled.View`
    flex-direction: row;
`;
const Input = styled.TextInput`
    height: 50px;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin-top: 15px;
    padding: 10px;
    min-width: ${props=>props.width || '100%'}
`;

const FinishBtn = styled.TouchableOpacity`
    background-color: #000;
    height: 60px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;
const FinishBtnText = styled.Text`
    color: #fff;
    font-size: 17px;
    font-weight: bold;
`;


export default ({show, setShow, userId, setEffect}) => {    
    const [type, setType] = useState();
    const [bairro, setBairro] = useState();
    const [rua, setRua] = useState();
    const [number, setNumber] = useState();
    const [reference, setReference] = useState();

    const setNewAdress = () => {
        Api.setNewAdress(userId, type, bairro, rua, number, reference)

        setShow(false);
        setEffect(true);
    }

    return(
        <Modal 
            transparent={true}
            visible={show}
            animationType="slide"
            onRequestClose={() => setShow(false)}
        >
            <ModalArea>

                <ModalBody>

                
                    <ModalItem>
                        <Input placeholder="Tipo (Casa, Apartamento)" onChangeText={t=>setType(t)}/>

                        <InputRowView>
                            <Input width="45%" placeholder="Bairro" onChangeText={b=>setBairro(b)}/>
                            <Input width="50%" style={{marginLeft: 18}} placeholder="Rua" onChangeText={r=>setRua(r)}/>

                        </InputRowView>
                        <Input placeholder="Número/Complemento" onChangeText={n=>setNumber(n)}/>
                        <Input style={{marginBottom: 15}} placeholder="Referência (Opcional)" onChangeText={re=>setReference(re)}/>
                    </ModalItem>

                    
                    <FinishBtn onPress={() => setNewAdress()}>
                        <FinishBtnText>Finalizar Cadastro</FinishBtnText>
                    </FinishBtn>

                </ModalBody>

            </ModalArea>
        </Modal>
    );
}