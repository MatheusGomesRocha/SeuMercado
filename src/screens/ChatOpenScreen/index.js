import React, {useState} from 'react';
import SendIcon from '../../assets/svg/send.svg';

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

let array = [
    {id: '1', author: 1, content: 'Mano o andré é muito gay kaskmakka pqp'},
    {id: '2', author: 2, name: 'André', content: 'Eu sou mesmo e daí?'},
    {id: '3', author: 2, name: 'André', content: 'Nem te conheço pra ficar fazendo essas piada comigo'},
    {id: '4', author: 1, content: 'Cara, foi só uma piada'},
    {id: '5', author: 1, content: 'Relaxa aí'},
    {id: '6', author: 1, content: 'Cara chatão'},
    {id: '7', author: 3, name: 'Aids', content: 'Mano, vocês sabiam que um leão depois de "almoçar"'},
    {id: '8', author: 3, name: 'Aids', content: 'Ele vai bra debaixo de uma árvore, se senta'},
    {id: '9', author: 3, name: 'Aids', content: 'E começa a comer cu de curioso'},
    {id: '10', author: 1, content: 'Cara, racismo não é legal, para com isso'},
    {id: '11', author: 1, content: '#blacklivesmatters'},
]
export default () => {
    const [message, setMessage] = useState();

    const ArrayMessageUser = ({data}) => {
        return(
            <MessageView align={data.author == 1 ? 'flex-end' : 'flex-start'}>
                <MessageContentView bgColor={data.author == 1 ? '#ea1d2c' : '#333'}>
                    {data.author != 1 &&
                        <MessageContentName color={data.author == 2 && '#ff00ff' || data.author == 3 && '#ffff00'}>{data.name}</MessageContentName>
                    }
                    <MessageContentText>{data.content}</MessageContentText>
                    <MessageContentHour>19:00</MessageContentHour>
                </MessageContentView>

            </MessageView>
        );
    }

    const sendMessage = () => {
        array.push({
            id: '123',
            
            content: message,
        })
    }

    return(
        <Container>
                <HeaderView>
                    <HeaderImg source={require('../../assets/img/carne_filter.jpg')} />
                    <ColumnView>
                        <HeaderName>Solitários e sem grana rsrs</HeaderName>
                        <HeaderUsers>Aids, André, Gabriel, Gabriele, Você</HeaderUsers>
                    </ColumnView>
                </HeaderView>

                <Flat
                    showsVerticalScrollIndicator={false}
                    data={array}
                    renderItem={({item}) => <ArrayMessageUser data={item}/>}
                    keyExtractor={(item) => item.id}
                />

                <SendMessageView>
                    <SendMessageInput placeholder="Digite uma mensagem" placeholderTextColor="#ccc" onChangeText={me=>setMessage(me)} />
                    <SendMessageBtn onPress={sendMessage}>
                        <SendIcon width="25" height="25" fill="#fff" />
                    </SendMessageBtn>
                </SendMessageView>
            
        </Container>
    );
}