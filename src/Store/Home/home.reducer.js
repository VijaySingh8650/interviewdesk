import { HOME_ERROR, HOME_LOADING, HOME_SUCCESS, USER_SUCCESS } from "./home.type";

const initialValue = {
    loading: false,
    error: false,
    user: {},
    pictures:[]
}

export const reducerFunction = (state=initialValue, {type,payload}) => {
    switch (type) {
        case HOME_LOADING: {
            return {
                ...state,
                loading:true
            }
        }
        case HOME_ERROR: {
            return {
                ...state,
                loading: false,
                error:false
            }
        }
        case HOME_SUCCESS: {
            return {
              ...state,
              loading: false,
              error: false,
              pictures:payload
            };
        }
        case USER_SUCCESS: {
            return {
              ...state,
              loading: false,
              error: false,
              user:payload
            };
        }
        default: return state;
    }
}