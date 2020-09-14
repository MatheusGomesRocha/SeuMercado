import React from 'react';

const initialState = {
    name: '',
    email: '',
    price: '',
    cut: '',
    day: '',
    month: '',
    hour: '',
    duration: '',
    favorites: [],
    dark:  false,
    deleteCut: '',
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_MONTH':
            return {...state, month: action.payload.month};
        break;
        case 'SET_DAY':
            return {...state, day: action.payload.day};
        break;
        case 'SET_HOUR':
            return {...state, hour: action.payload.hour};
        break;           
        case 'SET_CUT':
            return {...state, cut: action.payload.cut};
        break;
        case 'SET_PRICE':
            return {... state, price: action.payload.price};
        break;
        case 'SET_DURATION':
            return {...state, duration: action.payload.duration};
        break;
        case 'SET_EMAIL':
            return {...state, email: action.payload.email};
        break;
        case 'SIGN_OUT':
            return initialState;
        break;
        case 'DELETE_CUT':
            return {...state, deleteCut: action.payload.deleteCut};
        break;
    }
    return state;
}