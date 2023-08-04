import { useEffect, useState } from "react";
import axios from "../../axios";
import { useSelector, useDispatch } from "react-redux";
import { loginMethod, throughSessionLogin } from "../../redux/actions";
const LoginComponent = () => {
    const [form, setForm] = useState({ mobileNo: "", otp: "" })
    const [otp, setOtp] = useState(false)
    const dispatch = useDispatch(loginMethod())
    const getState = (e) => {
        e.preventDefault();
        console.log(form)
        const body = {
            "address": "string",
            "deviceData": {
                "address": "string",
                "appVersion": "string",
                "deviceType": "string",
                "deviceVersion": "string",
                "logUUID": "string"
            },
            "latitude": "string",
            "logUUID": "string",
            "longitude": "string",
            "mobile": form.mobileNo,
            "sid": "string"
        }

        axios.post('admin/sendOTP', body).then((res) => {
            console.log(res.data)
            if (res.data.success == true) {
                console.log(res.data.code)
                setOtp(true);
            } else {
                console.log(res.data.code)
            }
        }).catch((err) => console.log(err))
    }
    useEffect(() => {
        let sessionID = localStorage.getItem('sessionId');
        if (sessionID !== '') {
            const body = {
                "logUUID": "string",
                "sid": sessionID
            }
            dispatch(throughSessionLogin(body))
        } else return null;
        
    }, [])
    const onSubmit = (e) => {
        e.preventDefault();
        const body = {
            "address": "string",
            "deviceRequest": {
                "address": "string",
                "appVersion": "string",
                "deviceType": "string",
                "deviceVersion": "string",
                "logUUID": "string"
            },
            "latitude": "string",
            "logUUID": "string",
            "longitude": "string",
            "mobile": form.mobileNo,
            "otp": form.otp
        }
        dispatch(loginMethod(body))
    }
    return (
        <div className="maxWid_480">
            <div className="fd inpElm">
                <form>
                    <h4> Sign in </h4>
                    <h5> Enter your mobile number. </h5>
                    <div className="fd m_t_30">
                        <label> Mobile Number </label>
                        <input type="text"
                            placeholder="Mobile Number"
                            value={form.mobileNo}
                            disabled={otp}
                            onChange={e => setForm({ ...form, mobileNo: e.target.value })} />
                    </div>
                    {!otp ? <button className="btn_1 m_t_25" type="submit" onClick={(e) => getState(e)}> Send OTP </button> : null}

                    {otp ? <> <div className="fd m_t_15">
                        <label> Enter OTP </label>
                        <input type="text"
                            placeholder="OTP"
                            value={form.otp}
                            onChange={e => setForm({ ...form, otp: e.target.value })} />
                    </div>
                        <button className="btn_1 m_t_25" type="submit" onClick={(e) => onSubmit(e)}> Submit </button>
                    </> : null}
                </form>
            </div>
        </div>
    )
}

export default LoginComponent;