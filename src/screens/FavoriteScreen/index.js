import React, { useState, useEffect } from 'react';
import Api from '../../Api';
import auth from '@react-native-firebase/auth';

import {
    Container,

    Flat,

    ItemBtn,
    ItemImg,
    ItemColumn,
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

    const FavoriteArray = ({ data }) => {
        return (
            <ItemBtn>
                <>
                    <ItemImg source={{ uri: data.img }} />
                    <ItemColumn>
                        <ItemTitle>{data.name}</ItemTitle>
                        <ItemDescription numberOfLines={2}>{data.description}</ItemDescription>
                        <ItemPrice>R${parseFloat(data.price).toFixed(2)}</ItemPrice>
                    </ItemColumn>
                </>
            </ItemBtn>
        );
    }

    return (
        <Container>

            <Flat
                data={data}
                renderItem={({ item }) => <FavoriteArray data={item} />}
                keyExtractor={(item) => item.id}
            />
        </Container>
    );
}