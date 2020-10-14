import React from 'react';
import {useNavigation} from '@react-navigation/native';

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
    {id: '1', avatar: require('../../assets/img/geral_filter.jpg'), name: 'Solitários e sem grana', LastMessage: 'eu não lek', date: '20:47'},
    {id: '2', avatar: require('../../assets/img/carne_filter.jpg'), name: 'Junior', LastMessage: 'Eu vi agr msm', date: '20:00'},
    {id: '3', avatar: require('../../assets/img/bebida.jpg'), name: 'Mãe', LastMessage: 'Já vou', date: '20:47'},
    {id: '4', avatar: require('../../assets/img/higiene_filter.jpg'), name: 'Aids', LastMessage: 'eiê', date: '20:47'},
]
export default () => {
    const navigation = useNavigation();

    const ArrayMessage = ({data}) => {
        return(
            <MessageBtn onPress={() => navigation.navigate('chatopen')}>
                <>
                    <Avatar source={data.avatar} />
                    <ColumnView>
                        <NameText>{data.name}</NameText>
                        <LastMessageText>{data.LastMessage}</LastMessageText>
                    </ColumnView>
                    <DateText>{data.date}</DateText>
                </>
            </MessageBtn>
        );
    }
    return(
        <Container>
            <Flat
                showsVerticalScrollIndicator={false}
                data={array}
                renderItem={({item}) => <ArrayMessage data={item}/>}
                keyExtractor={(item) => item.id}
            />
        </Container>
    );
}