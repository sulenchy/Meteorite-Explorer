// action type : isLoading, isFetching
import axios from 'axios';

// Action Types
export const IS_LOADING = 'IS_LOADING';
export const IS_COMPLETE = 'IS_COMPLETE';
export const SET_ITEM = 'SET_ITEM';
export const FETCH_ITEM = 'FETCH_ITEM';

type DispatchFn = (dispatch?: any, getState?: any) => any;


// action creator
export function isLoading() {
    return { type: IS_LOADING, isLoading: true }
}
export function isComplete() {
    return { type: IS_COMPLETE, isLoading: false }
}

export function setItem(item: object) {
    return { type: SET_ITEM, item }
}

export const fetchItem = (): DispatchFn => async (dispatch) => {
    try {
        const response = await axios.get(process.env.URL);
        if (response.status === 404) return false;
        return dispatch(setItem(response.data));
      } catch (error) {
        if (error.status !== 404) {
          return Promise.reject(error);
        }
      }
}

