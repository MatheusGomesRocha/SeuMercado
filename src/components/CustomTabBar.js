import React from 'react';
import styled from 'styled-components/native';
import HomeEmptyIcon from '../assets/svg/home_empty.svg';
import HomeFullIcon from '../assets/svg/home_full.svg';
import SearchIcon from '../assets/svg/search.svg';
import CartIcon from '../assets/svg/carrinho.svg';
import FavoriteEmptyIcon from '../assets/svg/favorite_empty.svg';
import FavoriteFullIcon from '../assets/svg/favorite_full.svg';
import UserFullIcon from '../assets/svg/user_full.svg';
import UserEmptyIcon from '../assets/svg/user_empty.svg';

const Div = styled.View `
    flex-direction: row;
    background-color: #FE654F;
`;

const Texto = styled.Text`
    font-size: 12px;
    color: #808080;
`;

const Touch = styled.TouchableOpacity `
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 70px;
`;

const TouchCenter = styled.TouchableHighlight `
    width: 70px;
    height: 70px;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    margin-top: -20px;
    border-radius: 35px;
    border: 3px solid #FE654F;
`;

export default ({state, descriptors, navigation, index}) => {          /** Props que vem para facilitar a customização */

    const goTo = (screen) => {          // function que pega o nome da screen enviada dependendo da Tab que o usuário clicou
        navigation.navigate(screen);
    }

    return (
        <Div>
            <Touch key={index} onPress={() => goTo('home')}>
                {state.index === 0 ?
                    <HomeFullIcon width="28" height="28" fill="#fff" />
                :
                    <HomeEmptyIcon style={{opacity: 0.7}} width="28" height="28" fill="#fff" />
                }
            </Touch>

            <Touch key={index} onPress={() => goTo('search')}>
                <SearchIcon style={{opacity: state.index === 1 ? 1 : 0.7}} width="28" height="28" fill="#fff" />
            </Touch>

            <TouchCenter underlayColor="rgba(255, 255, 255, 0.9)" key={index} onPress={() => goTo('cart')}>
                <CartIcon width="32" height="32" fill="#FE654F" />
            </TouchCenter>

            <Touch key={index} onPress={() => goTo('favorites')}>
                {state.index === 3 ?
                    <FavoriteFullIcon width="28" height="28" fill="#fff" />
                :
                    <FavoriteEmptyIcon style={{opacity: 0.7}} width="28" height="28" fill="#fff" />
                }
            </Touch>

            <Touch key={index} onPress={() => goTo('user')}>
                {state.index === 4 ?
                    <UserFullIcon width="28" height="28" fill="#fff" />
                :
                    <UserEmptyIcon style={{opacity: 0.7}} width="28" height="28" fill="#fff" />
                }            
            </Touch>
        </Div>
    );
}

