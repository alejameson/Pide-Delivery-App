import { GET_ALL_PRODUCTS } from "../actions";

const initialState = {
    productsLoaded: [],
}

function rootReducer (state = initialState, action){
    switch(action.type){

        case GET_ALL_PRODUCTS:
            return {
                productsLoaded: action.payload,
            }
        
        default:
            return state;
    }
}

export default rootReducer;