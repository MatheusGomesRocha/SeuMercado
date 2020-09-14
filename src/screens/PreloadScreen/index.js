import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;

const Texto = styled.Text``;

export default () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.reset({
                routes: [
                    { name: 'apptab' },
                ]
            });
        }, 2000)
    }, [])

    return(
        <Container>
            <Texto> Olá mundo Preload </Texto>
        </Container>
    );
}