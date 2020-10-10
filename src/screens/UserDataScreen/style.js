import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;

export const FatherView = styled.View`
    margin-top: 15px;
`;

export const DefaultBtn = styled.TouchableHighlight`
    flex-direction: row;
    height: 80px;
    padding: 15px;
    align-items: center;
    borderBottomWidth: 1px;
    borderBottomColor: #ddd;
`; 
export const LeftView = styled.View`
    width: 95%;
`;
export const BtnText = styled.Text`
    font-size: 16px;
`;
export const BtnSmallText = styled.Text`
    color: #ccc;
`;