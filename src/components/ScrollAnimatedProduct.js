import React, { useRef } from 'react';
import ProductDefault from './ProductDefault';
import styled from 'styled-components/native';

import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  Animated,
} from 'react-native';

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #ff0000;
    justify-content: flex-start;
`;

const Title = styled.Text`
    color: #000;
    font-size: 22px;
`;

const ArrayView = styled.View`
    width: 100%;
    align-items: center;
    margin-top: 50px;
`;

const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = 84;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default (props) => {
    const scrollY = useRef(new Animated.Value(0)).current;

    const headerTranslateY = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [0, -HEADER_SCROLL_DISTANCE],
        extrapolate: 'clamp',
    });


    // O Input seria o tamanho do scroll a ser realizado para aplicar as mudanças

    // O Output seria basicamente um controle para aplicar o "transform" 

    // Aqui tem 3 fases da opacity (primeiro: antes de realizar o scroll, quando a imagem está sendo mostrada. segundo: durante o scroll que está sendo mudado. e terceiro: quando a imagem já sumiu)
    // O Scroll tem um tamanho máximo até mudar da imagem para o header, que seria o HEADER_SCROLL_DISTANCE

    const imageOpacity = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: [1, 1, 0],     // opacidade 1 para mostrar a imagem antes e durante o Scroll, quando finalizar o tamanho máximo indicado do scroll, irá trocar a imagem por um Header, assim dando opacity 0 na imagem
        extrapolate: 'clamp',
    });


    // Aqui é o mesmo príncipio do exemplo de cima. Só que nós vamos focar em mostrar o título apenas no Header, e não mostraremos com a imagem
    const titleOpacity = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: [0, 0, 1],     // O contrário do exemplo de cima, aqui daremos uma opacity 0 antes e durante o scroll, depois que realizar o scroll e a imagem sumir, o título irá aparecer
        extrapolate: 'clamp',
    });


    // Fazendo a transição da imagem
    const imageTranslateY = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [0, 100],
        extrapolate: 'clamp',
    });


    // Fazendo a transição do Title
    const titleTranslateY = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: [0, 0, -8],
        extrapolate: 'clamp',
    });
    

    return (
        <Container>
            <Animated.ScrollView
                contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT - 32, alignItems: 'center' }}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: true },
                )}>


            </Animated.ScrollView>

            <Animated.View style={[styles.header, { transform: [{ translateY: headerTranslateY }] }]}>
                <Animated.Image style={[styles.headerBackground, { opacity: imageOpacity, transform: [{ translateY: imageTranslateY }],},]} source={props.img}/>
                <Animated.View style={[styles.overlay, { opacity: imageOpacity},]}></Animated.View>
            </Animated.View>

            <Animated.View style={[styles.topBar, {opacity: titleOpacity, transform: [ { translateY: titleTranslateY }],},]}>
                <Title>{props.name}</Title>
            </Animated.View>

                    <Title> Olá</Title>
        </Container>
    );
    }

    const styles = StyleSheet.create({

        //  View pai que encobre a Imagem e o Overlay
        header: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: '#ea1d2c',
            overflow: 'hidden',
            height: HEADER_MAX_HEIGHT,
            marginBottom: 50,
        },

        // Imagem
        headerBackground: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            width: null,
            height: HEADER_MAX_HEIGHT,
            resizeMode: 'cover',
        },

        // Overlay por cima para escurecer a imagem
        overlay: {
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
        },
        
        // Header
        topBar: {
            marginTop: 40,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,

        },
    });

