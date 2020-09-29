import React, {useState, useEffect} from 'react';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import ProductHome from '../../components/ProductHome';
import {Animated} from 'react-native';

import {
    Container,
    ScrollContainer,
    Texto,

    Scroll,
    FilterView,
    ItemFilterBtn,
    ImgFilter,

    CommentsView,
    CommentsItemView,
    CommentsHeader,
    CommentsImg,
    CommentsColumn,
    CommentsName,
    CommentsRate,
    CommentsDate,
    CommentsText,

    PopView,
    PopText,

    NoUserLoginBtn,
    NoUserLoginText,
} from './style';

let array = [
    {img: require('../../assets/img/geral_filter.jpg'), type: 'Geral'},
    {img: require('../../assets/img/carne_filter.jpg'), type: 'Carnes'},
    {img: require('../../assets/img/legume_filter.jpg'), type: 'Legumes'},
    {img: require('../../assets/img/vegetal_filter.jpg'), type: 'Vegetais'},
    {img: require('../../assets/img/bebida.jpg'), type: 'Bebidas'},
    {img: require('../../assets/img/higiene_filter.jpg'), type: 'Higiene pessoal'},
    {img: require('../../assets/img/lanchonete_filter.jpg'), type: 'Lanchonete'},
    {img: require('../../assets/img/sorvete.jpg'), type: 'Sorvetes'},
];

let comments = [
    {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus sapien at nulla semper, sed dignissim nisi bibendum. Vestibulum ac nisl erat. Proin ut ex ut purus consequat tincidunt. Donec elementum sem ligula, sed luctus ipsum dictum mollis. Nullam porta ipsum est. Quisque ultricies eros sit amet fringilla vehicula.'},
    {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus sapien at nulla semper, sed dignissim nisi bibendum. Vestibulum ac nisl erat. Proin ut ex ut purus consequat tincidunt. Donec elementum sem ligula, sed luctus ipsum dictum mollis. Nullam porta ipsum est. Quisque ultricies eros sit amet fringilla vehicula.'},
    {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus sapien at nulla semper, sed dignissim nisi bibendum. Vestibulum ac nisl erat. Proin ut ex ut purus consequat tincidunt. Donec elementum sem ligula, sed luctus ipsum dictum mollis. Nullam porta ipsum est. Quisque ultricies eros sit amet fringilla vehicula.'},
    {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus sapien at nulla semper, sed dignissim nisi bibendum. Vestibulum ac nisl erat. Proin ut ex ut purus consequat tincidunt. Donec elementum sem ligula, sed luctus ipsum dictum mollis. Nullam porta ipsum est. Quisque ultricies eros sit amet fringilla vehicula.'},
    {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus sapien at nulla semper, sed dignissim nisi bibendum. Vestibulum ac nisl erat. Proin ut ex ut purus consequat tincidunt. Donec elementum sem ligula, sed luctus ipsum dictum mollis. Nullam porta ipsum est. Quisque ultricies eros sit amet fringilla vehicula.'},
];

export default () => {
    const navigation = useNavigation();

    const goToFilter = (type, img) => {
        navigation.navigate('filter', {type, img});
    }

    const [bot, setBot] = useState(new Animated.Value(-50));

    useEffect(() => {
        Animated.timing(bot, {
            toValue: 120,
            duration: 500,
            useNativeDriver: false,
        }).start();
    }, [])
    

    return(
        <Container>
            <ScrollContainer>

                <Scroll decelerationRate="fast" horizontal={true} showsHorizontalScrollIndicator={false}>
                    <FilterView>
                        {array.map((item, k) => (
                            <ItemFilterBtn onPress={() => goToFilter(item.type, item.img)} key={k}>
                                <ImgFilter source={item.img} />
                                <Texto>{item.type}</Texto> 
                            </ItemFilterBtn>
                        ))}
                    </FilterView>
                </Scroll>

                <CommentsView>
                    <Swiper
                        showsPagination={false}
                        showsButtons={true}
                        prevButton={<Icon name="angle-left" size={35} color="#000" />}
                        nextButton={<Icon name="angle-right" size={35} color="#000" />}
                    >

                        {comments.map((item, k) => (
                            <CommentsItemView key={k}>

                                <CommentsHeader>

                                    <CommentsImg source={require('../../assets/img/sorvete.jpg')}/>

                                    <CommentsColumn>
                                        <CommentsName>Matheus Gomes </CommentsName>

                                        <CommentsRate>
                                            <Icon name="star-o" size={16} color="#fff" />
                                            <Icon style={{marginLeft: 2}} name="star-o" size={16} color="#fff" />
                                            <Icon style={{marginLeft: 2}} name="star-o" size={16} color="#fff" />
                                            <Icon style={{marginLeft: 2}} name="star-o" size={16} color="#fff" />
                                            <Icon style={{marginLeft: 2}} name="star-o" size={16} color="#fff" />
                                        </CommentsRate>

                                        <CommentsDate>20/09/2020 </CommentsDate>
                                        
                                    </CommentsColumn>

                                </CommentsHeader>
                                
                                <CommentsText>{item.text}</CommentsText>
                                
                            </CommentsItemView>
                        ))}
                        
                    </Swiper>
                </CommentsView>

                <PopView>
                    <PopText>Mais populares</PopText>
                    <ProductHome/>
                </PopView>

            </ScrollContainer>

        <Animated.View style={{bottom: bot}}>
            <NoUserLoginBtn onPress={() => navigation.navigate('prevlogin')} underlayColor="#dfdfdf"> 
                <>
                    <NoUserLoginText>Para fazer pedidos no SeuMercado</NoUserLoginText>
                    <NoUserLoginText style={{color: '#FE654F', fontWeight: 'bold'}}>Entrar ou cadastrar-se</NoUserLoginText>
                </>
            </NoUserLoginBtn>      
        </Animated.View>   
        </Container>
    );
}