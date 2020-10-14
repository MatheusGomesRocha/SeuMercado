import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import Api from '../Api';
import {useSelector} from 'react-redux';
import LoadingScreen from './LoadingComponent';

import {
  Alert,
  StyleSheet,
  Animated,
  ActivityIndicator,
} from 'react-native';

const Container = styled.View`
    flex: 1;
    background-color: #fff;
`;


const LoadingView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;


const ArrayView = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    margin: 50px 0 15px 0;
`;
const ItemBtn = styled.TouchableHighlight`
    min-height: 120px;
    width: 100%;
    flex-direction: row;
    border-radius: 10px;
    background-color: #fff;
    align-items: center;
    borderBottomWidth: 1px;
    borderBottomColor: #ddd;
    padding: 20px;
`;


const ItemRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
const ItemHeader = styled.View`
    width: 70%;
    margin-left: 25px;
`;
const Img = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 10px;
`;
const Name = styled.Text`
    font-size: 16px;
`;
const Description = styled.Text`
    color: #aaa;
    margin-top: 5px;
`;
const Price = styled.Text`
    font-size: 16px;
    color: #ea1d2c;
    font-weight: bold;
    margin-top: 5px;
`;
const Title = styled.Text`
    color: #fff;
    font-size: 22px;
`;
const OverlayImage = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.2);
`;


const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = 84;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;



export default (props) => {
  const navigation = useNavigation();
  const [productsFiltered, setProductsFiltered] = useState([]);
  const userLogin = useSelector(state=>state.user.email);
  const [loading, setLoading] = useState(true);

  const scrollY = useRef(new Animated.Value(0)).current;


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
 
  // Pegando o valor do scroll
  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    setTimeout(() => {
        setLoading(false);
    }, 2000)
  }, [])

  useEffect(() => {
    const getProducts = async () => {
        setProductsFiltered([]);
        
        let json = await Api.getProductsFiltered(props.type);
        setProductsFiltered(json)
    }

    getProducts();
  }, [])

  const ProductFilterComponent = ({data}) => {
    return(
        <ItemBtn underlayColor="rgba(0, 0, 0, 0.1)" onPress={() => GoToProduct(data.id, data.name, data.img, data.description, data.price)}>
          <ItemRow>

            <ItemHeader>
              <Name>{data.name}</Name>
              <Description numberOfLines={2}>{data.description}</Description>
              <Price>R$ {parseFloat(data.price).toFixed(2)}</Price>
            </ItemHeader>

            <Img resizeMode="cover" source={data.img && {uri: data.img}} />
          
          </ItemRow>
        </ItemBtn>
    );
  }

  const GoToProduct = (id, name, img, description, price) => {
    if(userLogin) {
        navigation.navigate('product', {id, name, img, description, price})
    } else {
        Alert.alert(
            "Ops...",
            "Você precisa está logado para ver o produto",
            [
              { text: "OK" }
            ],
            { cancelable: false }
        );
    }
} 

  return (
    <Container>
      {loading ?
        <LoadingScreen />
      :
        <>
          <Animated.ScrollView
            contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT - 32, alignItems: 'center' }}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              { useNativeDriver: true },
            )}>

            <ArrayView>
                {productsFiltered.map((item) => (
                  <ProductFilterComponent data={item} key={item.id} />
                ))}
            </ArrayView>

          </Animated.ScrollView>
        </>
      }
      

      <Animated.View style={[styles.header, { transform: [{ translateY: headerTranslateY }] }]}>
        <Animated.Image style={[styles.headerBackground, { opacity: imageOpacity, transform: [{ translateY: imageTranslateY }],},]} source={props.img && {uri: props.img}}/>
        <Animated.View style={[styles.overlay, { opacity: imageOpacity},]}></Animated.View>
      </Animated.View>

      <Animated.View style={[styles.topBar, {opacity: titleOpacity, transform: [ { translateY: titleTranslateY }],},]}>
        <Title>{props.type}</Title>
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

