import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #fff;
`;


export const InputView = styled.View`
    flex-direction: row;
    borderBottomWidth: 1px;
    borderBottomColor: #000;
    width: 80%;
    height: 50px;
    border-radius: 10px;
    margin-bottom: 15px;
    align-items: center;
`;
export const Input = styled.TextInput`
    flex: 1;  
    margin-left: 10px;
`;
export const BtnEye = styled.TouchableOpacity``;



export const ForgotBtn = styled.TouchableOpacity`
    margin-top: 10px;
`;
export const ForgotText = styled.Text`
    color: #ea1d2c;
    font-size: 16px;
    text-decoration-line: underline;
    font-weight: bold;
`;


export const OtherLoginView = styled.View`
    margin-top: 50px;
`;
export const AllLineView = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;
export const LineView = styled.View`
    height: 2px;
    width: 25%;
    background-color: #ea1d2c;
`;
export const LineText = styled.Text`
    color: #ea1d2c;
`;
export const OptionLoginView = styled.View`
    flex-direction: row;
    justify-content: center;
    margin-top: 25px;
`;


export const SignUpView = styled.View`
    flex-direction: row;
    margin-top: 30px;
`;
export const SignUpText = styled.Text`
    color: #aaa;
`;
export const SignUpBtn = styled.TouchableOpacity``;



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
