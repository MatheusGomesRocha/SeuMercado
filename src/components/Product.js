import React, {useState, useRef, useEffect } from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import Api from '../Api';
import auth from '@react-native-firebase/auth';
import Less from '../assets/svg/less.svg';
import Plus from '../assets/svg/plus.svg';

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
    background-color: #fff;
`;


const InfosView = styled.View`
    flex: 1;
    width: 100%;
    margin-top: 50px;
    padding: 15px;
`;
const ProductName = styled.Text`
    font-size: 22px;
    font-weight: bold;
`;
const ProductDescription = styled.Text`
    color: #888;
    font-size: 16px;
    margin-top: 15px;
`;
const ProductPrice = styled.Text`
    color: #ea1d2c;
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
`;


const Title = styled.Text`
    color: #fff;
    font-size: 22px;
`;


const QtdView = styled.View`
    width: 35%;
    height: 50px;
    border: 1px solid #eee;
    border-radius: 10px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;
const QtdBtn = styled.TouchableOpacity``;
const QtdText = styled.Text`
    font-size: 18px;
`;


const BtnAdd = styled.TouchableHighlight`
    background-color: #ea1d2c;
    height: 50px;
    width: 60%;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    border-radius: 10px;
`;
const BtnAddText = styled.Text`
    color: #fff;
    font-size: 16px;
`;

const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = 84;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default (props) => {
    // States
    const [price, setPrice] = useState(props.price);
    const [subtotal, setSubtotal] = useState();
    const [bot, setBot] = useState(new Animated.Value(-200));
    const [qtd, setQtd] = useState(1);
    
    const scrollY = useRef(new Animated.Value(0)).current;

    const userId = auth().currentUser.uid;

    const navigation = useNavigation();


    // O Input seria o tamanho do scroll a ser realizado para aplicar as mudanças

    // O Output seria basicamente um controle para aplicar o "transform" 

    // Aqui tem 3 fases da opacity (primeiro: antes de realizar o scroll, quando a imagem está sendo mostrada. segundo: durante o scroll que está sendo mudado. e terceiro: quando a imagem já sumiu)
    // O Scroll tem um tamanho máximo até mudar da imagem para o header, que seria o HEADER_SCROLL_DISTANCE

    const headerTranslateY = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [0, -HEADER_SCROLL_DISTANCE],
        extrapolate: 'clamp',
    });


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


    useEffect(() => {
        Animated.timing(bot, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    }, [])
    
    useEffect(() => {
        setSubtotal(parseFloat(props.price*qtd).toFixed(2));
    }, [qtd]);


    const setIntoCart = () => {
        let json = Api.setIntoCart(userId, props.id, props.name, props.img, props.type, price, qtd, subtotal, navigation);
    }
    
    return (
        <Container>
            
            <Animated.ScrollView
                contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT - 32, alignItems: 'center' }}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: true },
                )}>

            <InfosView>
                <ProductName>{props.name}</ProductName>
                <ProductDescription>{props.description}</ProductDescription>
                <ProductPrice>R$ {parseFloat(props.price).toFixed(2)}</ProductPrice>
                
            </InfosView>


            </Animated.ScrollView>

            <Animated.View style={[styles.header, { transform: [{ translateY: headerTranslateY }] }]}>
                <Animated.Image style={[styles.headerBackground, { opacity: imageOpacity, transform: [{ translateY: imageTranslateY }],},]} source={props.img && {uri:props.img}}/>
                <Animated.View style={[styles.overlay, { opacity: imageOpacity},]}></Animated.View>
            </Animated.View>

            <Animated.View style={[styles.topBar, {opacity: titleOpacity, transform: [ { translateY: titleTranslateY }],},]}>
                <Title>{props.name}</Title>
            </Animated.View>

            <Animated.View style={[styles.BottomView, {bottom: bot}]}>
                <QtdView>

                    <QtdBtn disabled={qtd == 1 ? true : false} onPress={() => setQtd(qtd - 1)}>
                        <Less width="20" height="20" fill={qtd == 1 ? '#ccc' : '#ea1d2c'}/>
                    </QtdBtn>

                    <QtdText>{qtd}</QtdText>
                    
                    <QtdBtn onPress={() => setQtd(qtd + 1)}>
                        <Plus width="20" height="20" fill="#ea1d2c"/>
                    </QtdBtn>
                    
                </QtdView>

                <BtnAdd onPress={setIntoCart}>
                    <>
                        <BtnAddText>Adicionar</BtnAddText>
                        <BtnAddText style={{fontWeight: 'bold'}}>R${parseFloat(price * qtd).toFixed(2)}</BtnAddText>
                    </>
                </BtnAdd>
            </Animated.View>
            
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
            resizeMode: 'stretch',
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

        BottomView: {
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'space-around', 
            height: 90,
            borderTopWidth: 1,
            borderTopColor: '#eee'
        }
    });

