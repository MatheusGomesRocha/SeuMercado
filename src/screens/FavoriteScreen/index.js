import React, { useState, useEffect } from 'react';
import Api from '../../Api';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

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
            <ItemBtn underlayColor="rgba(0, 0, 0, 0.1)" onLongPress={() => alertFavorite(data.id, data.img, data.name, data.description, data.price)}>
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

    const alertFavorite = (id, img, name, description, price) => {
        Alert.alert(
            "Excluir",
            "Deseja excluir esse item dos favoritos?",
            [
                { text: "Excluir", onPress: () => deleteFavorite(id, img, name, description, price) },
                { text: 'Cancel', style: 'cancel' }
            ],
            { cancelable: false }
        );
    }

    const deleteFavorite = (id, img, name, description, price) => {
        Api.deleteFavorite(userId, id, img, name, description, price);
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