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

let array = [
    { id: '1', avatar: require('../../assets/img/geral_filter.jpg'), name: 'Solitários e sem grana', LastMessage: 'eu não lek', date: '20:47' },
    { id: '2', avatar: require('../../assets/img/carne_filter.jpg'), name: 'Junior', LastMessage: 'Eu vi agr msm', date: '20:00' },
    { id: '3', avatar: require('../../assets/img/bebida.jpg'), name: 'Mãe', LastMessage: 'Já vou', date: '20:47' },
    { id: '4', avatar: require('../../assets/img/higiene_filter.jpg'), name: 'Aids', LastMessage: 'eiê', date: '20:47' },
]
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
                        <LastMessageText numberOfLines={1}>{data.lastMessage}</LastMessageText>
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