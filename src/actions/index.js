const axios = require('axios').default;
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";

export function getAllProducts(){
    return function(dispatch){
        return axios.get(`http://demo0092727.mockable.io/products`)
        .then((response) => {
            dispatch({
                type: GET_ALL_PRODUCTS,
                payload: response.data,
            })
        })       
    }
}