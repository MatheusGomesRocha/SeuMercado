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
} from './style';

export default () => {
    const [users, setUsers] = useState([]);
    const [chatList, setChatList] = useState([]);
    const [userLoginName, setUserLoginName] = useState();
    const [chatId, setChatId] = useState();

    const userId = auth().currentUser.uid;

    const navigation = useNavigation();

    useEffect(() => {
        Api.getUserLogin(userId, setUserLoginName);
    }, [])

    useEffect(() => {
        setUsers([]);

        Api.getUsers(userId, setUsers);
    }, [])

    useEffect(() => {
        Api.getChat(userId, setChatList);
    }, [])

    const setChat = async (targetId, targetName) => {
        await Api.setNewChat(userId, userLoginName, targetId, targetName, setChatId);


        if (chatId !== '') {
            navigation.goBack();
        }
    }


    const ArrayMessage = ({ data }) => {
        return (
            <MessageBtn onPress={() => setChat(data.id, data.name)}>
                <>
                    <Avatar source={require('../../assets/img/geral_filter.jpg')} />
                    <ColumnView>
                        <NameText>{data.name}</NameText>
                    </ColumnView>
                </>
            </MessageBtn>
        );
    }
    return (
        <Container>
            <Flat
                showsVerticalScrollIndicator={false}
                data={users}
                renderItem={({ item }) => <ArrayMessage data={item} />}
                keyExtractor={(item) => item.id}
            />
        </Container>
    );
}