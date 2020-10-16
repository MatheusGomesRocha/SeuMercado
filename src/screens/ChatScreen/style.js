import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
    padding: 15px;
`;

export const Flat = styled.FlatList``;

export const MessageBtn = styled.TouchableHighlight`
    flex-direction: row;
    borderBottomWidth: 1px;
    borderBottomColor: #ddd;
    align-items: center;
    justify-content: ${props=>props.jContent};
    height: 80px;
`;
export const Avatar = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 40px;
`;
export const ColumnView = styled.View`
    width: 70%;
    margin-left: 15px;

`;
export const NameText = styled.Text`
    font-weight: bold;
    font-size: 16px;
`;
export const LastMessageText = styled.Text`
    color: #aaa;
`;
export const DateText = styled.Text`
    color: #aaa;
`;

export const ContactBtn = styled.TouchableHighlight`
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