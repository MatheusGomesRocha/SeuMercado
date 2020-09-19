import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;

export const ScrollContainer = styled.ScrollView``;


export const Scroll = styled.ScrollView`
    max-height: 180px;
`;


export const FilterView = styled.View`
    flex-direction: row;
    margin-top: 10px;
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
export const Texto = styled.Text`
    font-size: 16px;
    margin-top: 5px;
`;



export const CommentsView = styled.View`
    padding: 10px;
    margin: 30px 10px 10px 10px;
    background-color: #FE654F;
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



export const PopView = styled.View`
    margin-top: 30px;
`;
export const PopText = styled.Text`
    font-weight: bold;
    font-size: 22px;
    padding: 20px 10px 20px 10px;
`;