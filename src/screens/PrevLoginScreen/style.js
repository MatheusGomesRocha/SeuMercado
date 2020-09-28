import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    z-index: 999;
`; 

export const BackgroundImg = styled.ImageBackground`
    width: 100%;
    flex: 1;
`;

export const BackgroundView = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: flex-end;
`;

export const ViewBtn = styled.View`
    margin-bottom: 50px;
    width: 100%;
    align-items: center;
`;
export const DefaultBtn = styled.TouchableHighlight`
    background-color: #fff;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 70%;
    border-radius: 10px;
    margin-bottom: 15px;
`;
export const BtnText = styled.Text`
    font-size: 20px;
`;
