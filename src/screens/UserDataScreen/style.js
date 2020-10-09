import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    height: 70px;
    borderBottomWidth: 1px;
    borderBottomColor: rgba(0, 0, 0, 0.1);
`;

export const HeaderBackBtn = styled.TouchableHighlight`
    width: 30px;
    height: 30px;
    border-radius: 25px;
    margin-left: 20px;
`; 

export const HeaderText = styled.Text`
    margin-left: 100px;
    font-size: 18px;
`;