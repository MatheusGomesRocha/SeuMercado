import React, {useState} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Div = styled.View`
    background-color: #fff;
    borderTopLeftRadius: 50px;
`;

const ItemBtn = styled.TouchableHighlight`
    min-height: 100px;
    borderBottomWidth: 1px;
    borderBottomColor: rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 100%;
`;

const ItemRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
const ItemHeader = styled.View`
    flex-direction: row;

`;
const ItemColumn = styled.View`
`;
const Avatar = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 10px;
`;
const Name = styled.Text`
    font-size: 16px;
`;
const Price = styled.Text`
    font-size: 16px;
    color: #5CAB7D;
`;

export default ({data}) => {  
    return(
            <Div>
                <ItemBtn underlayColor="rgba(0, 0, 0, 0.1)" onPress={() => alert('hello world')}>
                    <ItemRow>

                        <ItemHeader>

                            <ItemColumn>
                                <Name>{data.name}</Name>
                                <Price>R$ {data.price}</Price>

                                <ItemRow style={{marginTop: 5}}>
                                    <Icon style={{marginLeft: 2}} name="star-o" size={14} color="#E09F3E" />
                                    <Icon style={{marginLeft: 2}} name="star-o" size={14} color="#E09F3E" />
                                    <Icon style={{marginLeft: 2}} name="star-o" size={14} color="#E09F3E" />
                                    <Icon style={{marginLeft: 2}} name="star-o" size={14} color="#E09F3E" />
                                    <Icon style={{marginLeft: 2}} name="star-o" size={14} color="#E09F3E" />
                                </ItemRow>

                            </ItemColumn>

                        </ItemHeader>

                        <Avatar source={data.avatar} />

                    </ItemRow>
                    
                </ItemBtn>
        </Div>

    );
}