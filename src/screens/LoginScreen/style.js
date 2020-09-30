import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #fff;
`;

export const IconBtn = styled.TouchableHighlight`
    position: absolute;
    top: 5px;
    left: 10px;
    height: 60px;
    width: 60px;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
`;

export const InputView = styled.View`
    flex-direction: row;
    borderBottomWidth: 1px;
    borderBottomColor: #000;
    width: 70%;
    height: 50px;
    border-radius: 10px;
    margin-bottom: 15px;
    align-items: center;
`;
export const Input = styled.TextInput`
    flex: 1;  
    margin-left: 10px;
`;


export const ForgotBtn = styled.TouchableOpacity`
    margin-top: 10px;
`;
export const ForgotText = styled.Text`
    color: #aaa;
    font-size: 16px;
    text-decoration-line: underline;
    font-weight: bold;
`;


export const OtherLoginView = styled.View`
    flex-direction: row;
    margin-top: 50px;
`;


export const RegisterView = styled.View`
    flex-direction: row;
    margin-top: 30px;
`;
export const RegisterText = styled.Text`
    color: #aaa;
`;
export const RegisterBtn = styled.TouchableOpacity``;



export const BtnLogin = styled.TouchableHighlight`
    background-color: ${props=>props.bgColor};
    width: 100%;
    height: 60px;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
`;
export const BtnLoginText = styled.Text`
    color: #fff;
    font-size: 18px;
`;
