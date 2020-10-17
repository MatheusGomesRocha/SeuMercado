import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    padding-bottom: 65px;
`;


export const Flat = styled.FlatList`
`;


export const HeaderView = styled.View`
    flex-direction: row;
    background-color: #fff;
    height: 50px;
    align-items: center;
    padding-left: 45px;
`;
export const HeaderImg = styled.Image`
    height: 40px;
    width: 40px;
    border-radius: 25px;
`;
export const ColumnView = styled.View`
    margin-left: 8px;
`;
export const HeaderName = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;
export const HeaderUsers = styled.Text`
    color: #999;
`;


export const MessageView = styled.View`
    margin: 3px 5px 3px 5px;
    align-items: ${props=>props.align}
`;
export const MessageContentView = styled.View`
    background-color: ${props=>props.bgColor};
    border-radius: 10px;
    padding: 3px;
    max-width: 90%;
    min-height: 35px;
    justify-content: center;
`;
export const MessageContentName = styled.Text`
    color: ${props=>props.color};
    margin-left: 5px;
`;
export const MessageContentText = styled.Text`
    margin: 1px 50px 2px 5px;
    color: #fff;
    font-size: 16px;
`;
export const MessageContentHour = styled.Text`
    color: #bbb;
    font-size: 12px;
    margin: -15px 5px 5px 0;
    text-align: right;
    height: 15px;
`;


export const SendMessageView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    bottom: 7px;
    padding-left: 10px;
`;
export const SendMessageInput = styled.TextInput`
    background-color: rgba(0, 0, 0, 0.6);
    width: 85%;
    border-radius: 30px;
    color: #fff;
    padding-left: 20px;
    font-size: 16px;
`;
export const SendMessageBtn = styled.TouchableHighlight`
    height: 55px;
    width: 55px;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    background-color: #ea1d2c;
`;
