import { createStore } from 'redux';

export const initialState = {
     inp: 1,
     client: {
     },
     imageData: '',
};


export const updateImage = (imageData) => {
     return {
          type: 'UPDATE_IMAGE',
          payload: imageData,
     };
};

export const next = () => {
     return {
          type: 'NEXT',
     };
};

export const add = (input, value) => {
     return {
          type: 'ADD',
          payload: {
               input,
               value,
          },
     };
};

export const reducer = (state = initialState, action) => {
     switch (action.type) {
          case 'NEXT':
               return {
                    ...state,
                    inp: state.inp + 1,
               };
          case 'ADD':
               return {
                    ...state,
                    client: {
                         ...state.client, // Change 'clients' to 'client'
                         [action.payload.input]: action.payload.value,
                    },
               };
          case 'UPDATE_IMAGE':
               return {
                    ...state,
                    imageData: action.payload,
               };
          default:
               return state;
     }
};


export const store = createStore(reducer);
