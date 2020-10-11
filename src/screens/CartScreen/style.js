import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #efefef;
    
`;

export const Flat = styled.FlatList``;

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