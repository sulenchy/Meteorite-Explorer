import {
    IS_LOADING,
    IS_COMPLETE,
    SET_ITEM,
 } from '../actions';

 export const initialState: appState = {
    item: [],
    isLoading: false
}

export interface appState {
    item: object,
    isLoading: boolean
}
  

export default (state = initialState, action: any) => {
    switch (action.type) {
      case IS_LOADING:
        return {
            ...state,
            isLoading: action.isLoading
        };
  
      case IS_COMPLETE:
        return {
            ...state,
            isLoading: action.isLoading
        };

      case SET_ITEM:
        return {
            ...state,
            item: [...action.item]
        };
    

      default:
        return state;
    }
  };