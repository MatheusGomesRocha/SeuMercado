import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import SendIcon from '../../assets/svg/send.svg';
import { useRoute } from '@react-navigation/native';
import Api from '../../Api';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

import {
    Container,

    Flat,

    HeaderView,
    HeaderImg,
    ColumnView,
    HeaderName,
    HeaderUsers,

    MessageView,
    MessageBtn,
    MessageContentName,
    MessageContentText,
    MessageContentHour,

    SendMessageView,
    SendMessageInput,
    SendMessageBtn,
} from './style';

export default () => {
    const [content, setContent] = useState();
    const [message, setMessage] = useState([]);
    const [users, setUsers] = useState([]);

    const flat = useRef();

    const userId = auth().currentUser.uid;

    const route = useRoute();

    const targetName = route.params.targetName;
    const chatId = route.params.chatId;

    const ArrayMessageUser = ({ data }) => {

        return (
            <MessageView align={data.author == userId ? 'flex-end' : 'flex-start'}>
                <MessageBtn underlayColor="#AD101B" onLongPress={() => AlertMessage(data.messageId, data.author, data.content, data.date)} bgColor={data.author == userId ? '#ea1d2c' : '#333'}>
                    <>
                        <MessageContentText>{data.content}</MessageContentText>
                        <MessageContentHour>{data.date}</MessageContentHour>
                    </>
                </MessageBtn>

            </MessageView>
        );
    }

    useEffect(() => {
        setMessage([]);

        Api.getContentChat(chatId, setMessage, setUsers);

    }, [chatId]);

    const AlertMessage = (messageId, author, content, date) => {
        Alert.alert(
            "Excluir",
            "Deseja excluir essa mensagem?",
            [
                { text: "Excluir", onPress: () => deleteMessage(messageId, author, content, date) },
                { text: 'Cancel', style: 'cancel' }
            ],
            { cancelable: false }
        );
    }

    const deleteMessage = (messageId, author, content, date) => {
        Api.deleteMessage(chatId, messageId, author, content, date);
    }

    const sendMessage = () => {
        if (content !== '') {
            Api.setMessage(chatId, userId, content, users, flat);
            setContent('');
        }
    }

    return (
        <Container>
            <HeaderView>
                <HeaderImg source={require('../../assets/img/carne_filter.jpg')} />
                <ColumnView>
                    <HeaderName>{targetName}</HeaderName>
                    {/* <HeaderUsers>Aids, André, Gabriel, Gabriele, Você</HeaderUsers> */}
                </ColumnView>
            </HeaderView>

            <Flat
                showsVerticalScrollIndicator={false}
                data={message}
                renderItem={({ item }) => <ArrayMessageUser data={item} />}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingBottom: 10, paddingTop: 10 }}
            />

            <SendMessageView>
                <SendMessageInput onSubmitEditing={() => sendMessage()} value={content} placeholder="Digite uma mensagem" placeholderTextColor="#ccc" onChangeText={c => setContent(c)} />
                <SendMessageBtn onPress={() => sendMessage()}>
                    <SendIcon width="25" height="25" fill="#fff" />
                </SendMessageBtn>
            </SendMessageView>

        </Container>
    );
}