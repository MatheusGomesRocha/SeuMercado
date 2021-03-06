import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;


export const Flat = styled.FlatList``;
export const HeaderBtn = styled.TouchableHighlight`
    padding: 10px;
    height: 70px;
    flex-direction: row;
    align-items: center;
`;
export const HeaderText = styled.Text`
    font-size: 16px;
`;


export const FlatView = styled.View`
    height: 180px;
    align-items: center;
    justify-content: center;
`;


export const ItemFilterBtn = styled.TouchableOpacity`
    margin: 10px;
    align-items: center;
`;
export const ImgFilter = styled.Image`
    width: 180px;
    height: 120px;
    border-radius: 10px;
`;
export const FilterText = styled.Text`
    font-size: 16px;
    margin-top: 5px;
    color: #000;
`;


export const PopView = styled.View`
    margin-top: 10px;
`;
export const PopText = styled.Text`
    font-weight: bold;
    font-size: 22px;
    padding: 10px 10px 10px 20px;
`;


export const NoUserLoginBtn = styled.TouchableHighlight`
    position: absolute;
    z-index: 999;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 80px;
    left: 10%;
    border-radius: 10px;
    elevation: 15;
    shadowRadius: 12px;
`;
export const NoUserLoginText = styled.Text`
    font-size: 16px;
`;




export const CommentsView = styled.View`
    padding: 10px;
    margin: 30px 10px 10px 10px;
    background-color: #ea1d2c;
    border-radius: 10px;
    height: 300px;
`;
export const CommentsItemView = styled.View`
    margin: 0 30px 0 30px;
`;
export const CommentsHeader = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const CommentsImg = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 35px;
`;
export const CommentsColumn = styled.View`
    padding: 10px;
`;
export const CommentsName = styled.Text`
    color: #fff;
    font-size: 16px;
`;
export const CommentsRate = styled.View`
    flex-direction: row;
    margin-top: 3px;
`;
export const CommentsDate = styled.Text`
    color: #fff;
    margin-top: 3px;

`;
export const CommentsText = styled.Text`
    color: #fff;
    padding: 10px;
`;





