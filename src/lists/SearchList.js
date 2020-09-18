import React from 'react';
import styled from 'styled-components/native';
import ProductSearch from '../components/ProductSearch';

const Div = styled.View`
`;

export default ({data}) => {
    return(
            <Div>
                <ProductSearch data={data} />
            </Div>        
    );
}