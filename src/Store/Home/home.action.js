import axios from 'axios';
import { HOME_ERROR, HOME_LOADING, HOME_SUCCESS, USER_SUCCESS } from './home.type';


//pictures
export const getPictures = ()=>async(dispatch) => {
    dispatch({ type: HOME_LOADING });
    try {
        let res = await axios.get(
          `https://jsonplaceholder.typicode.com/photos`
        );
        dispatch({ type: HOME_SUCCESS, payload: res.data });
    }
    catch (err) {
        dispatch({type:HOME_ERROR})
    }
}


//user
export const getUser = ()=>async(dispatch) => {
    dispatch({ type: HOME_LOADING });
    try {
        let res = await axios.get(
          `https://jsonplaceholder.typicode.com/users/1`
        );
        dispatch({ type: USER_SUCCESS, payload: res.data });
    }
    catch (err) {
        dispatch({type:HOME_ERROR})
    }
}