import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;

export const Scroll = styled.ScrollView``;

export const FatherView = styled.View``;

export const HeaderView = styled.View`
    height: 190px;
    padding: 15px;
    borderBottomWidth: 1px;
    borderBottomColor: #aaa;
    width: 100%;
    justify-content: center;
`;
export const HeaderRowView = styled.View`
    flex-direction: row;
    margin: 15px 0 35px 0;
`;
export const HeaderText = styled.Text`
    font-size: 18px;
    width: 65%;
    font-weight: bold;
`;
export const GoToLoginBtn = styled.TouchableHighlight`
    border: 1px solid #bbb;
    border-radius: 5px;
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: center;
`;
export const GoToLoginText = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;


export const HeaderLoginView = styled.View`
    height: 100px;
    flex-direction: row;
`;


export const BtnTopView = styled.View`
    align-items: center;
`;
export const DefaultBtn = styled.TouchableHighlight`
    flex-direction: row;
    height: 80px;
    align-items: center;
    borderBottomWidth: 1px;
    borderBottomColor: #ddd;
    width: 100%;
    padding: 15px;
`;
export const LeftView = styled.View`
    margin-left: 20px;
    width: 85%;
`;
export const BtnText = styled.Text`
    color: #000;
    font-size: 18px;
`;
export const BtnSmallText = styled.Text`
    color: #aaa;
`;



export const BtnBottomView = styled.View`
    margin-top: 80px;
    align-items: center;
`;
export const DefaultBottomBtn = styled.TouchableHighlight`
    flex-direction: row;
    height: 80px;
    align-items: center;
    borderBottomWidth: 1px;
    borderBottomColor: #ddd;
    width: 100%;
    padding: 15px;
`;
export const DefaultBottomText = styled.Text`
    color: #aaa;
    font-size: 18px;
`;