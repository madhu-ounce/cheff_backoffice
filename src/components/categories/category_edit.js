import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
const CategoryEdit = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const [form, setForm] = useState({ id: location.state.item.id, categoryItemName: location.state.item.name, status: location.state.item.status, style: location.state.item.value });
    const submitEditDetails = () => {
        let body = {
            "id": form.id,
            "logUUID": "string",
            "name": form.categoryItemName,
            "value": form.style,
            "sid": localStorage.getItem('sessionId'),
            "status": form.status
        }
        axios.post('admin/updateCategory', body).then((res) => {
            if (res.status == 200) {
                navigate('/categories')
            } else {
                alert('Error')
            }
        })
    }
    return (
        <div className="p_30 fd">
            <div className="fd inpElm">
                <div className="box_1 fd p_30">
                    <h4 className="bold"> Edit Category </h4>
                    <div className="row">
                    <div className="col-12 col-sm-6 col-lg-4">
                            <div className="fd m_t_20">
                                <label> Category Name </label>
                                <input type="text"
                                    placeholder=""
                                    value={form.categoryItemName}
                                    onChange={e => setForm({ ...form, categoryItemName: e.target.value })} />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="fd m_t_20">
                                <label> Style </label>
                                <input type="text"
                                    placeholder=""
                                    value={form.style}
                                    onChange={e => setForm({ ...form, style: e.target.value })} />
                            </div>
                        </div>
                        <div className="col-4"></div>
                        <div className="col-4">
                            <div className="fd m_tb_15"> <button type="submit" onClick={(e) => submitEditDetails(e)} className="btn_1"> <Link to="category_create"> Submit </Link> </button> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryEdit;