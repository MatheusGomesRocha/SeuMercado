import React from 'react';
import styled from 'styled-components/native';

const Div = styled.View`
    margin: 15px 30px 0 15px;
`;

const ItemView = styled.View`
    height: 120px;
    width: 100%;
    flex-direction: row;
    border: 1px solid #ddd;
    border-radius: 10px;


`;
const ItemImg = styled.Image`
    height: 120px;
    width: 120px;
    border-radius: 10px;
`;
const ColumnView = styled.View``;

const ItemName = styled.Text`
    font-family: roboto;
`;

export default ({data}) => {
    return(
        <Div>
            <ItemView>
                <ItemImg source={require('../assets/img/carne_filter.jpg')} />
                <ColumnView>
                    <ItemName>{data.items.name}</ItemName>
                </ColumnView>
            </ItemView>
        </Div>
    );
}