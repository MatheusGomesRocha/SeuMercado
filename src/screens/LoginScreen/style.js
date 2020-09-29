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

export const Input = styled.TextInput`
    border: 1px solid #000;
    width: 70%;
    height: 50px;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 15px;
`;
export const Btn = styled.TouchableHighlight`
    background-color: #FE654F;
    width: 70%;
    height: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;
export const BtnText = styled.Text`
    color: #fff;
    font-size: 18px;
`;