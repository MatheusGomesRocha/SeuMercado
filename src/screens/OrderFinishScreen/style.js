import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #efefef;
`;

export const Scroll = styled.ScrollView``;

export const ItemView = styled.View`
    flex: 1;
    padding: 15px;
`;

export const DateText = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

export const InfoItemView = styled.View`
    margin: 15px 0 15px 0;
    height: 300px;
    width: 100%;
    background-color: #fff;
    elevation: 5;
    border-radius: 10px;
`;

export const HeaderView = styled.View`
    flex-direction: row;
    margin: 0 15px 0 15px;
    height: 80px;
    align-items: center;
    borderBottomWidth: 1px;
    borderBottomColor: #ddd;
`;
export const Img = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 30px;
`;
export const ColumnView = styled.View`
    margin-left: 15px;
`;
export const ColumnTextTop = styled.Text`
    font-size: 16px;
`;
export const ColumnTextBottom = styled.Text`
    color: #aaa;
`;

export const OrderView = styled.View`
    flex-direction: row;
    margin: 0 15px 0 15px;
    height: 80px;
    align-items: center;
    justify-content: center;
    borderBottomWidth: 1px;
    borderBottomColor: #ddd;
`;
export const OrderQtdText = styled.Text`
    border: 1px solid #ddd;
    text-align: center;
    font-size: 18px;
    color: #aaa;
`;
export const OrderNameText = styled.Text`
    color: #aaa;
    font-size: 18px;
`;
export const OrderPriceText = styled.Text`
    color: #ea1d2c;
    font-weight: bold;
    font-size: 18px;
`;


export const StatusView = styled.View`
    margin: 0 15px 0 15px;  
    height: 60px;
    align-items: center;
    justify-content: center;
    borderBottomWidth: 1px;
    borderBottomColor: #ddd;
`;
export const StatusText = styled.Text`
    font-size: 16px;
    color: green;
`;

export const BtnView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex: 1;
`;
export const DefaultBtn = styled.TouchableHighlight`
    width: 50%;
    align-items: center;
    justify-content: center;
    height: 80px;
`;
export const BtnText = styled.Text`
    color: #ea1d2c;
    font-size: 18px; 
`;
