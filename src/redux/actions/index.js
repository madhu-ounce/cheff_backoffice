import { LOGIN_REQUEST, LOGIN_FAIL, LOGIN_SUCCESS, GET_PROFILE, LOGOUT, CATEGORY_REQUEST, CATEGORY_SUCCESS, CATEGORY_FAIL } from "./actionTypes";
import axios from "../../axios";
const loginRequest = (data) => {
    return {
        type: LOGIN_REQUEST,
        payload: data
    }
}
const loginSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}
const loginFail = (data) => {
    return {
        type: LOGIN_FAIL,
        payload: data
    }
}

const getProfile = (data) => {
    return {
        type: GET_PROFILE,
        payload: data
    }
}

const logout = () =>{
    return {
        type: LOGOUT
    }
}

const getCatList_request = () => {
    return {
        type : CATEGORY_REQUEST
    }
}

const getCatList_success = (data) => {
    return {
        type : CATEGORY_SUCCESS,
        payload: data
    }
}

export const loginMethod = (data) => {

    return function (dispatch) {
        dispatch(loginRequest(data))
        axios.post('admin/login', data).then((res) => {

            if (res.data.success == true && res.data.sid !== '') {
                dispatch(loginSuccess(res.data))
                localStorage.setItem('sessionId', res.data.sid)
                const body = {
                    "logUUID": "string",
                    "sid": res.data.sid
                }
                axios.post('admin/profile', body).then((profile) => {
                    dispatch(getProfile(profile.data))
                })
            } else {
                dispatch(loginFail(res.data))
                console.log(res.data)
            }
        })
    }
}

export const throughSessionLogin = (body) => {
    return function (dispatch) {
        const loginBody = {
            sid: body.sid,
            success: true
        }
        axios.post('admin/profile', body).then((profile) => {
            console.log(profile.data.code)
            if (profile.data.code == "INVALID_SESSION") {
                localStorage.clear();
                dispatch(logout())
            } else {
                dispatch(loginSuccess(loginBody))
                dispatch(getProfile(profile.data))
            }
        }).catch((err) => console.log(err))
    }
}

export const getCategories = (body) =>{
    return function(dispatch){
        dispatch(getCatList_request());
        
        axios.post('admin/getCategories', body).then((res) => {
            dispatch(getCatList_success(res.data.categories)) 
        })
    }
}