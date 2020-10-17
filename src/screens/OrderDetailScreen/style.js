import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
    padding: 15px;
`;


export const Scroll = styled.ScrollView``;


export const HeaderView = styled.View`
    min-height: 100px;
    justify-content: center;
`;


export const TopView = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const TopImg = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 30px;
`;
export const TopText = styled.Text`
    margin-left: 15px;
    font-size: 18px;
    font-weight: bold;
`;
export const BottomText = styled.Text`
    margin-top: 15px;
    color: #ccc;
    font-weight: bold;
`;


export const StatusView = styled.View`
    background-color: #eee;
    margin-top: 20px;
    min-height: 50px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;
export const StatusText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${props=>props.color}
`;


export const OrderInfoView = styled.View`
    margin-top: 30px;
`;


export const OrderIdView = styled.View`
    margin-top: 15px;
    borderBottomWidth: 1px;
    borderBottomColor: #ddd;
    height: 80px;
    justify-content: center;
`;
export const OrderIdText = styled.Text`
    font-weight: bold;
    font-size: 16px;
`;


export const Flat = styled.FlatList``;


export const OrderProductView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    min-height: 80px;
    borderBottomWidth: 1px;
    borderBottomColor: #ddd;
`;
export const ProductQtdView = styled.View`
    border: 1px solid #aaa;
    min-height: 25px;
    width: 25px;
    align-items: center;
    justify-content: center;
`;
export const ProductQtdText = styled.Text`
    font-size: 16px;
    color: #aaa;
    font-weight: bold;
`;
export const ProductNameText = styled.Text`
    width: 65%;
    font-size: 16px;
`;
export const ProductPriceText = styled.Text`
    color: #ea1d2c;
    font-size: 16px;
    font-weight: bold;
`;


export const TotalPriceView = styled.View`
    min-height: 120px;
    justify-content: center;
    borderBottomWidth: 1px;
    borderBottomColor: #ddd;
`;
export const PriceView = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
export const PriceText = styled.Text`
    font-size: 16px;
    font-weight: ${props=>props.weight || 'normal'}
    color: ${props=>props.color || '#000'};
`;


export const AdressView = styled.View`
    min-height: 150px;
    justify-content: center;
`;
export const AdressText = styled.Text`
    color: #aaa;
    margin-bottom: 15px;
`;
export const TitleText = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;
export const RuaText = styled.Text`
    font-size: 16px;
    margin-top: 2px;
`;
export const BairroText = styled.Text`
    font-size: 16px;
    margin-top: 2px;
`;
export const ReferenceText = styled.Text`
    font-size: 16px;
    color: #aaa;
    margin-top: 2px;
`;