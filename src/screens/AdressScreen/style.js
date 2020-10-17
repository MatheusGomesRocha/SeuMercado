import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;


export const Flat = styled.FlatList``;


export const ItemBtn = styled.TouchableHighlight`
    min-height: 150px;
    background-color: #fff;
    border-radius: 10px;
    width: 100%;
    justify-content: center;
    padding: 15px;
    margin-top: 15px;
    border-width: ${props=>props.bWidth || '0'};
    border-color: ${props=>props.bColor || 'transparent'};
`;
export const TitleText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 2px;
`;
export const RuaText = styled.Text`
    color: #999;
    margin-bottom: 2px;
`;
export const BairroText = styled.Text`
    color: #999;
    margin-bottom: 2px;
`;
export const DescriptionText = styled.Text`
    color: #999;
`;

export const AddBtn = styled.TouchableHighlight`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background-color: #ea1d2c;
    position: absolute;
    bottom: 30px;
    right: 30px;
    align-items: center;
    justify-content: center;
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