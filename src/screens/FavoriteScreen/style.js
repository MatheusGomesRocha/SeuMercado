import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;


export const Flat = styled.FlatList``;


export const ItemBtn = styled.TouchableHighlight`
    min-height: 120px;
    width: 100%;
    flex-direction: row;
    border-radius: 10px;
    background-color: #fff;
    align-items: center;
    borderBottomWidth: 1px;
    borderBottomColor: #ddd;
    padding: 15px;
`;
export const ItemImg = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 10px;
`;
export const ItemColumn = styled.View`
    width: 70%;
    margin-left: 25px;
`;
export const ItemTitle = styled.Text`
    font-size: 16px;
`;
export const ItemDescription = styled.Text`
    color: #aaa;
    margin-top: 5px;
`
export const ItemPrice = styled.Text`
    font-size: 16px;
    color: #ea1d2c;
    font-weight: bold;
    margin-top: 5px;
`;