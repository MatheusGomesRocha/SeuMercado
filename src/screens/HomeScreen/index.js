import React from 'react';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

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
} from './style';

let array = [
    {img: require('../../assets/img/geral_filter.jpg'), title: 'Geral'},
    {img: require('../../assets/img/carne_filter.jpg'), title: 'Carnes'},
    {img: require('../../assets/img/legume_filter.jpg'), title: 'Legumes'},
    {img: require('../../assets/img/vegetal_filter.jpg'), title: 'Vegetais'},
    {img: require('../../assets/img/bebida.jpg'), title: 'Bebidas'},
    {img: require('../../assets/img/higiene_filter.jpg'), title: 'Higiene pessoal'},
    {img: require('../../assets/img/lanchonete_filter.jpg'), title: 'Lanchonete'},
    {img: require('../../assets/img/sorvete.jpg'), title: 'Sorvetes'},
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

    const goToFilter = (type) => {
        navigation.navigate('filter', {type});
    }
    
    return(
        <Container>
            <ScrollContainer>

                <Scroll decelerationRate="fast" horizontal={true} showsHorizontalScrollIndicator={false}>
                    <FilterView>
                        {array.map((item, k) => (
                            <ItemFilterBtn onPress={() => goToFilter(item.title)} key={k}>
                                <ImgFilter source={item.img} />
                                <Texto>{item.title}</Texto> 
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

            </ScrollContainer>
        </Container>
    );
}