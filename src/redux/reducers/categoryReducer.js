import { CATEGORY_REQUEST, CATEGORY_SUCCESS, CATEGORY_FAIL } from "../actions/actionTypes";
const initialState = {
    itemsList: null,
    catLoader: true
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORY_REQUEST: return { ...state, itemsList: null, catLoader: true }
        case CATEGORY_SUCCESS: return { ...state, itemsList: action.payload, catLoader: 'got list' }
        case CATEGORY_FAIL: return { ...state, itemsList: null, catLoader: false }
        default: return state
    }
}

export default categoryReducer;
