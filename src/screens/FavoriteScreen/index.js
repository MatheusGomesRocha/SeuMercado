import React, {useState, useEffect} from 'react';
import Api from '../../Api';
import auth from '@react-native-firebase/auth';

import {
    Container,

    Flat,

    ItemBtn,
    ItemImg,
    ItemTitle,
    ItemDescription,
    ItemPrice,
} from './style';

export default () => {
    const [data, setData] = useState([]);

    const userId = auth().currentUser.uid;

    useEffect(() => {
        Api.getFavorites(userId, setData)
    }, [])
    return (
        <Container>

            <Flat
                data={data}
                renderItem={({ item }) => <OrderFinish data={item} />}
                keyExtractor={(item) => item.id}
            />
        </Container>
    );
}