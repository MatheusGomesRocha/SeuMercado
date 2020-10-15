import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import Api from '../../Api';

import {
    Container,

    Flat,

    MessageBtn,
    Avatar,
    ColumnView,
    NameText,
    LastMessageText,
    DateText,
} from './style';

let array = [
    { id: '1', avatar: require('../../assets/img/geral_filter.jpg'), name: 'Solitários e sem grana', LastMessage: 'eu não lek', date: '20:47' },
    { id: '2', avatar: require('../../assets/img/carne_filter.jpg'), name: 'Junior', LastMessage: 'Eu vi agr msm', date: '20:00' },
    { id: '3', avatar: require('../../assets/img/bebida.jpg'), name: 'Mãe', LastMessage: 'Já vou', date: '20:47' },
    { id: '4', avatar: require('../../assets/img/higiene_filter.jpg'), name: 'Aids', LastMessage: 'eiê', date: '20:47' },
]
export default () => {
    const [users, setUsers] = useState([]);
    const [chatList, setChatList] = useState([]);
    const [userLoginId, setUserLoginId] = useState();
    const [userLoginName, setUserLoginName] = useState();

    const userId = auth().currentUser.uid;

    const navigation = useNavigation();

    useEffect(() => {
        const getUsers = async () => {
            setUsers([]);

            var json = await Api.getUsers(userId);
            var userLogin = await Api.getUserLogin(userId);

            userLogin.forEach(item => {
                setUserLoginId(item.id);
                setUserLoginName(item.name);
            })

            setUsers(json);
        }

        getUsers();
    }, [])

    useEffect(() => {
        Api.getChat(userId, setChatList);
    }, [])

    const setChat = async (chatId, targetName) => {
        // await Api.setNewChat(userLoginId, userLoginName, targetId, targetName);
        navigation.navigate('chatopen', {chatId, targetName})

    }


    const ArrayMessage = ({ data }) => {
        return (
            <MessageBtn onPress={() => setChat(data.chatId, data.title)}>
                <>
                    <Avatar source={require('../../assets/img/geral_filter.jpg')} />
                    <ColumnView>
                        <NameText>{data.title}</NameText>
                        <LastMessageText>{data.lastMessage}</LastMessageText>
                    </ColumnView>
                    <DateText>17:16</DateText>
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
                keyExtractor={(item) => item.id}
            />
        </Container>
    );
}