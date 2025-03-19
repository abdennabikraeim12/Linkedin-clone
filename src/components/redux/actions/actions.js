
import * as actions from "./actionTypes"
export const setUser = (payload) => {
    return {
        type:actions.SET_USER, // type:SET_USER
        user : payload // payload == fih 9ima mta3 user
    }
}
export const setLoading = (status) => ({
    type: actions.SET_LOADING_STATUS,
    status: status,// status if true or false
  });
  export const getArticles = (payload) => ({
    type: actions.GET_ARTICLES,
    payload: payload,// payload it's a articles information 
  });
  