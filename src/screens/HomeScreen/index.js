import React, {useState, useEffect} from 'react';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import ProductDefault from '../../components/ProductDefault';
import {Animated, StatusBar, ActivityIndicator, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useSelector} from 'react-redux';
import Api from '../../Api';
import LoadingScreen from '../../components/LoadingComponent';

import {
    Container,

    LoadingView,

    Flat,
    FlatView,

    ItemFilterBtn,
    ImgFilter,
    FilterText,

    PopView,
    PopText,

    NoUserLoginBtn,
    NoUserLoginText,

    // CommentsView,
    // CommentsItemView,
    // CommentsHeader,
    // CommentsImg,
    // CommentsColumn,
    // CommentsName,
    // CommentsRate,
    // CommentsDate,
    // CommentsText,
} from './style';

let comments = [
    {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus sapien at nulla semper, sed dignissim nisi bibendum. Vestibulum ac nisl erat. Proin ut ex ut purus consequat tincidunt. Donec elementum sem ligula, sed luctus ipsum dictum mollis. Nullam porta ipsum est. Quisque ultricies eros sit amet fringilla vehicula.'},
    {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus sapien at nulla semper, sed dignissim nisi bibendum. Vestibulum ac nisl erat. Proin ut ex ut purus consequat tincidunt. Donec elementum sem ligula, sed luctus ipsum dictum mollis. Nullam porta ipsum est. Quisque ultricies eros sit amet fringilla vehicula.'},
    {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus sapien at nulla semper, sed dignissim nisi bibendum. Vestibulum ac nisl erat. Proin ut ex ut purus consequat tincidunt. Donec elementum sem ligula, sed luctus ipsum dictum mollis. Nullam porta ipsum est. Quisque ultricies eros sit amet fringilla vehicula.'},
    {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus sapien at nulla semper, sed dignissim nisi bibendum. Vestibulum ac nisl erat. Proin ut ex ut purus consequat tincidunt. Donec elementum sem ligula, sed luctus ipsum dictum mollis. Nullam porta ipsum est. Quisque ultricies eros sit amet fringilla vehicula.'},
    {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus sapien at nulla semper, sed dignissim nisi bibendum. Vestibulum ac nisl erat. Proin ut ex ut purus consequat tincidunt. Donec elementum sem ligula, sed luctus ipsum dictum mollis. Nullam porta ipsum est. Quisque ultricies eros sit amet fringilla vehicula.'},
];

export default () => {
    const [filterArray, setFilterArray] = useState([]);
    const [productArray, setProductArray] = useState([]);
    const [loading, setLoading] = useState(true);
    const [bot, setBot] = useState(new Animated.Value(-50));

    const navigation = useNavigation();
    const email = useSelector(state=>state.user.email);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, [])
    
    useEffect(() => {
        Animated.timing(bot, {
            toValue: 100,
            duration: 500,
            useNativeDriver: false,
        }).start();
    }, [])

    useEffect(() => {
        const getFilter = async () => {
            setFilterArray([]);

            let json = await Api.getFilters();

            setFilterArray(json);
        }

        getFilter();
    }, [])

    useEffect(() => {
        const getProducts = async () => {
            setProductArray([]);
            
            let json = await Api.getProducts();
            setProductArray(json)
        }

        getProducts();
    }, [])

    const goToFilter = (type, img) => {
        navigation.navigate('filter', {type, img});
    }

    const FilterComponent = ({data}) => {
        return(
            <ItemFilterBtn onPress={() => goToFilter(data.name, data.img)} >
                <ImgFilter source={data.img && {uri: data.img}} />
                <FilterText>{data.name}</FilterText> 
            </ItemFilterBtn>
        );
    }
    

    return(
        <Container>
	        <StatusBar backgroundColor="#fff" barStyle="dark-content"/>
            {loading ?
                <LoadingScreen />
            :

                <>
                {/* <CommentsView>
                    <Swiper
                        showsPagination={false}
                        showsButtons={true}
                        prevButton={<Icon name="angle-left" size={35} color="#fff" />}
                        nextButton={<Icon name="angle-right" size={35} color="#fff" />}
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
                </CommentsView> */}
 
            
                    <Flat
                        ListHeaderComponent={
                            <>
                                <FlatView>
                                    <Flat
                                        decelerationRate="fast"
                                        showsHorizontalScrollIndicator={false}
                                        horizontal={true}
                                        data={filterArray}
                                        renderItem={({item}) => <FilterComponent data={item} />}
                                        keyExtractor={(item) => item.id}
                                        contentContainerStyle={styles.Flat}
                                    />  
                                </FlatView>
                                <PopView>
                                    <PopText>Mais populares</PopText>
                                </PopView>
                            </>
                        }
                        data={productArray}
                        renderItem={({item}) => <ProductDefault home={true} data={item}/> }
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={styles.Flat1}
                    />  
            
                    {!email &&
                        <Animated.View style={{bottom: bot}}>
                            <NoUserLoginBtn onPress={() => navigation.navigate('login')} underlayColor="#dfdfdf"> 
                                <>
                                    <NoUserLoginText>Para fazer pedidos no SeuMercado</NoUserLoginText>
                                    <NoUserLoginText style={{color: '#ea1d2c', fontWeight: 'bold'}}>Entrar ou cadastrar-se</NoUserLoginText>
                                </>
                            </NoUserLoginBtn>      
                        </Animated.View>  
                    }

                </>
            }
        </Container>
    );
}

const styles = StyleSheet.create({
    Flat: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

