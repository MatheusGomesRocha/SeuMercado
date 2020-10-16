import React, {useState, useEffect} from 'react';
import SendIcon from '../../assets/svg/send.svg';
import {useRoute} from '@react-navigation/native';
import Api from '../../Api';
import auth from '@react-native-firebase/auth';

import {
    Container,

    Flat,

    HeaderView,
    HeaderImg,
    ColumnView,
    HeaderName,
    HeaderUsers,

    MessageView,
    MessageContentView,
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
    const [time, setTime] = useState();

    
    const userId = auth().currentUser.uid;

    const route = useRoute();

    const targetName = route.params.targetName;
    const chatId = route.params.chatId;


    const ArrayMessageUser = ({data}) => {
      
        return(
            <MessageView align={data.author == userId ? 'flex-end' : 'flex-start'}>
                <MessageContentView bgColor={data.author == userId ? '#ea1d2c' : '#333'}>
                    <MessageContentText>{data.content}</MessageContentText>
                    <MessageContentHour>{data.date}</MessageContentHour>
                </MessageContentView>

            </MessageView>
        );
    }

    useEffect(() => {
        setMessage([]);

        Api.getContentChat(chatId, setMessage, setUsers);

    }, [chatId]);

    const sendMessage = () => {
        if(content !== '') {
            Api.setMessage(chatId, userId, content, users);
            setContent('');
        }
    }

    return(
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
                    renderItem={({item}) => <ArrayMessageUser data={item}/>}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{paddingBottom: 10, paddingTop: 10 }}
                />

                <SendMessageView>
                    <SendMessageInput value={content} placeholder="Digite uma mensagem" placeholderTextColor="#ccc" onChangeText={c=>setContent(c)} />
                    <SendMessageBtn onPress={sendMessage}>
                        <SendIcon width="25" height="25" fill="#fff" />
                    </SendMessageBtn>
                </SendMessageView>
            
        </Container>
    );
}