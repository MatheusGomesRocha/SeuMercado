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
    background-color: #fff;
    borderTopWidth: 1px;
    borderTopColor: #dfdfdf;
    elevation: 15;
`;

const Texto = styled.Text`
    font-size: 12px;
    color: ${props=>props.color};
    margin-top: 5px;
`;

const Touch = styled.TouchableOpacity `
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 70px;
`;

export default ({state, descriptors, navigation, index}) => {          /** Props que vem para facilitar a customização */

    const goTo = (screen) => {          // function que pega o nome da screen enviada dependendo da Tab que o usuário clicou
        navigation.navigate(screen);
    }

    return (
        <Div>
            <Touch key={index} onPress={() => goTo('home')}>
                {state.index === 0 ?
                    <HomeFullIcon width="28" height="28" fill="#000" />
                :
                    <HomeEmptyIcon style={{opacity: 0.7}} width="28" height="28" fill="#000" />
                }
                    <Texto color={state.index === 0 ? '#000' : '#808080'}>Início</Texto>
            </Touch>

            <Touch key={index} onPress={() => goTo('search')}>
                <SearchIcon style={{opacity: state.index === 1 ? 1 : 0.7}} width="28" height="28" fill="#000" />
                <Texto color={state.index === 1 ? '#000' : '#808080'}>Busca</Texto>
            </Touch>

            <Touch underlayColor="rgba(255, 255, 255, 0.9)" key={index} onPress={() => goTo('cart')}>
                <CartIcon style={{opacity: state.index === 2 ? 1 : 0.7}} width="28" height="28" fill="#000" />
                <Texto color={state.index === 2 ? '#000' : '#808080'}>Carrinho</Texto>
            </Touch>

            <Touch key={index} onPress={() => goTo('favorites')}>
                {state.index === 3 ?
                    <FavoriteFullIcon width="28" height="28" fill="#000" />
                :
                    <FavoriteEmptyIcon style={{opacity: 0.7}} width="28" height="28" fill="#000" />
                }
                    <Texto color={state.index === 3 ? '#000' : '#808080'}>Histórico</Texto>
            </Touch>

            <Touch key={index} onPress={() => goTo('user')}>
                {state.index === 4 ?
                    <UserFullIcon width="28" height="28" fill="#000" />
                :
                    <UserEmptyIcon style={{opacity: 0.7}} width="28" height="28" fill="#000" />
                }            
                    <Texto color={state.index === 4 ? '#000' : '#808080'}>Perfil</Texto>
            </Touch>
        </Div>
    );
}

