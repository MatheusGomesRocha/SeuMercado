import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import Api from '../../Api';
import ChatIcon from '../../assets/svg/chat.svg';

import { Alert } from 'react-native';

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

    const ArrayMessage = ({ data }) => {
        return (
            <MessageBtn onLongPress={() => AlertChat(data.chatId, data.with)} underlayColor="rgba(0, 0, 0, 0.1)" jContent={data.lastMessage ? 'space-between' : 'flex-start'} onPress={() => GoToChat(data.chatId, data.title)}>
                <>
                    <Avatar source={require('../../assets/img/geral_filter.jpg')} />
                    <ColumnView>
                        <NameText>{data.title}</NameText>
                        <LastMessageText numberOfLines={1}><LastMessageText style={{ color: '#333' }}>{data.lastMessageUser ? data.lastMessageUser === userId ? 'Eu:' : data.title + ':' : null} </LastMessageText>{data.lastMessage}</LastMessageText>
                    </ColumnView>
                    <DateText>{data.date}</DateText>
                </>
            </MessageBtn>
        );
    }

    const GoToChat = async (chatId, targetName) => {
        navigation.navigate('chatopen', { chatId, targetName })
    }

    const AlertChat = (id, target) => {
        Alert.alert(
            "Excluir",
            "Deseja excluir esse endereço?",
            [
                { text: "Excluir", onPress: () => deleteChat(id, target) },
                { text: 'Cancel', style: 'cancel' }
            ],
            { cancelable: false }
        );
    }

    const deleteChat = (id) => {
        Api.deleteChat(id);
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