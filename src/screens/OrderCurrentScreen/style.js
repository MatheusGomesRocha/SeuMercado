import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #efefef;
`;


export const Flat = styled.FlatList``;


export const NoInfoView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #fff;
`;
export const NoInfoText = styled.Text`
    font-size: 25px;
    margin-top: 20px;
    color: #000;
    text-align: center;
    width: 90%;
    
`;
export const DefaultBtn = styled.TouchableHighlight`
    height: 60px;
    width: 90%;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    background-color: #ea1d2c;
    margin-top: 50px;
`;
export const DefaultText = styled.Text`
    color: #fff;
    font-size: 18px;
`;