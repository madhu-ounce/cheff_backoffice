import { LOGIN_REQUEST, LOGIN_FAIL, LOGIN_SUCCESS, GET_PROFILE, LOGOUT } from "../actions/actionTypes";

const initialState = {
    logLoader: false,
    isLogin: false,
    sid: null,

    address: null,
    balance: 0,
    code: null,
    email: null,
    firstName: null,
    id: null,
    lastName: null,
    latitude: null,
    longitude: null,
    mobile: null,
    roles: {},
    status: null,
    success: true,
    username: null,
    verified: null
}

const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN_REQUEST: return { ...state, logLoader: true };
        case LOGIN_SUCCESS: return { ...state, sid: action.payload.sid, isLogin: action.payload.success, logLoader: false };
        case LOGIN_FAIL: return { ...state, isLogin: action.payload.success, logLoader: false };
        case LOGOUT : return { state }
        case GET_PROFILE: return {
            ...state, address: action.payload.address,
            balance: action.payload.balance,
            code: action.payload.code,
            email: action.payload.email,
            firstName: action.payload.firstName,
            id: action.payload.id,
            lastName: action.payload.lastName,
            latitude: action.payload.latitude,
            longitude: action.payload.longitude,
            mobile: action.payload.mobile,
            roles: action.payload.roles,
            status: action.payload.status,
            success: action.payload.success,
            username: action.payload.username,
            verified: action.payload.verified,
        };
        default: return state
    }
}

export default loginReducer;