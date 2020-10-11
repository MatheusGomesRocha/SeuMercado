import React from 'react';
import AngleRightIcon from '../../assets/svg/angle_right.svg';

import {
    Container,
    
    FatherView,

    DefaultBtn,
    
    LeftView,
    BtnText,
    BtnSmallText,
} from './style'

export default () => {
    return(
        <Container>
            <FatherView>
                <DefaultBtn>
                    <>
                        <LeftView>
                            <BtnText>Informações pessoais</BtnText>
                            <BtnSmallText>Nome e CPF</BtnSmallText>
                        </LeftView>
                        <AngleRightIcon width="15" height="15" />
                    </>
                </DefaultBtn>

                <DefaultBtn>
                    <>
                        <LeftView>
                            <BtnText>Dados para Contato</BtnText>
                            <BtnSmallText>Email e telefone</BtnSmallText>
                        </LeftView>
                        <AngleRightIcon width="15" height="15" />

                    </>
                </DefaultBtn>

            </FatherView>
        </Container>
    );
}