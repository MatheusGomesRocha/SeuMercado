import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;

export const Scroll = styled.ScrollView``;

export const InputView = styled.View`
    background-color: #00000030;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 30px 20px 30px 20px;
    height: 50px;
    border-radius: 25px;
`;
export const Input = styled.TextInput`
    color: #000;
    padding: 15px;
    flex: 1;
`;

export const IconBtn = styled.TouchableOpacity`
    padding: 15px;
`;

export const Flat = styled.FlatList``;