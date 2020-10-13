import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #efefef;
`;


export const FlatView = styled.View`
`;
export const Flat = styled.FlatList`
    margin-bottom: 61px;

`;


export const HeaderView = styled.View`
    height: 70px;
    width: 100%;
    background-color: #fff;    
    align-items: center;
    justify-content: center;
`;
export const HeaderText = styled.Text`
    font-size: 18px;
    font-weight: bold
    color: #ea1d2c;
`;


export const DefaultBtn = styled.TouchableHighlight`
    background-color: #ea1d2c;
    width: 100%;
    height: 60px;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
`;
export const DefaultBtnText = styled.Text`
    color: #fff;
    font-size: 18px;
`;


export const NoInfoView = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;
export const NoInfoText = styled.Text`
    font-size: 25px;
    margin-top: 20px;
    color: #000;
    text-align: center;
    width: 90%;
`;