import React from 'react';
import styled from 'styled-components/native';
import HomeIcon from '../assets/svg/home.svg';
import SearchIcon from '../assets/svg/search.svg';
import CartIcon from '../assets/svg/carrinho.svg';
import FavoriteIcon from '../assets/svg/coracao.svg';
import UserIcon from '../assets/svg/user.svg';


const Div = styled.View `
    flex-direction: row;
    background-color: #809BCE;
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
    border: 3px solid #0096C7;
`;

export default ({state, descriptors, navigation, index}) => {          /** Props que vem para facilitar a customização */

    const goTo = (screen) => {          // function que pega o nome da screen enviada dependendo da Tab que o usuário clicou
        navigation.navigate(screen);
    }

    return (
        <Div>
            <Touch key={index} onPress={() => goTo('home')}>
                <HomeIcon style={{opacity: state.index === 0 ? 1 : 0.5}} width="28" height="28" fill="#fff" />
            </Touch>

            <Touch key={index} onPress={() => goTo('search')}>
                <SearchIcon style={{opacity: state.index === 1 ? 1 : 0.5}} width="28" height="28" fill="#fff" />
            </Touch>

            <TouchCenter underlayColor="rgba(255, 255, 255, 0.9)" key={index} onPress={() => goTo('cart')}>
                <CartIcon width="32" height="32" fill="#0096C7" />
            </TouchCenter>

            <Touch key={index} onPress={() => goTo('favorites')}>
                <FavoriteIcon style={{opacity: state.index === 3 ? 1 : 0.5}} width="28" height="28" fill="#fff" />
            </Touch>

            <Touch key={index} onPress={() => goTo('user')}>
                <UserIcon style={{opacity: state.index === 4 ? 1 : 0.5}} width="28" height="28" fill="#fff" />
            </Touch>
        </Div>
    );
}

