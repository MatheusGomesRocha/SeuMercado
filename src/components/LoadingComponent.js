import React from 'react';
import styled from 'styled-components/native';
import {ActivityIndicator} from 'react-native';

const NoInfoView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #fff;
`;

export default () => {
    return(
        <NoInfoView>
                <ActivityIndicator size="large" color="#ea1d2c" />
        </NoInfoView>
    );
}