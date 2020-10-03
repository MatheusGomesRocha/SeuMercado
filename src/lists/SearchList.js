import React from 'react';
import styled from 'styled-components/native';
import ProductDefault from '../components/ProductDefault';

const Div = styled.View`
`;

export default ({data}) => {
    return(
            <Div>
                <ProductDefault search={true} />
            </Div>        
    );
}