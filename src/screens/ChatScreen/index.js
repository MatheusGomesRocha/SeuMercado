import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import Api from '../../Api';
import ChatIcon from '../../assets/svg/chat.svg';

import {
    Container,

    Flat,

    MessageBtn,
    Avatar,
    ColumnView,
    NameText,
    LastMessageText,
    DateText,

    ContactBtn,
} from './style';

export default () => {
    const [chatList, setChatList] = useState([]);
    
    const userId = auth().currentUser.uid;

    const navigation = useNavigation();

    useEffect(() => {
        Api.getChat(userId, setChatList);
    }, [])

    const GoToChat = async (chatId, targetName) => {
        navigation.navigate('chatopen', {chatId, targetName})
    }

    const ArrayMessage = ({ data }) => {
        return (
            <MessageBtn jContent={data.lastMessage ? 'space-between' : 'flex-start'} onPress={() => GoToChat(data.chatId, data.title)}>
                <>
                    <Avatar source={require('../../assets/img/geral_filter.jpg')} />
                    <ColumnView>
                        <NameText>{data.title}</NameText>
                        <LastMessageText numberOfLines={1}><LastMessageText style={{color: '#333'}}>{data.lastMessageUser === userId?'Eu:':data.title+':'} </LastMessageText>{data.lastMessage}</LastMessageText>
                    </ColumnView>
                    <DateText>{data.date}</DateText>
                </>
            </MessageBtn>
        );
    }
    return (
        <Container>
            <Flat
                showsVerticalScrollIndicator={false}
                data={chatList}
                renderItem={({ item }) => <ArrayMessage data={item} />}
                keyExtractor={(item) => item.users}
            />

            <ContactBtn onPress={() => navigation.navigate('contacts')}>
                <ChatIcon width="40px" height="40px" fill="#fff" />
            </ContactBtn>
        </Container>
    );
}