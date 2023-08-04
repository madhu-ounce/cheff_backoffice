import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../axios";
const CategoryCreate = (props) => {
    const [form, setForm] = useState({ categoryItemName: '', style: '' });
    const navigate = useNavigate();
    const createCat = (e) => {
        e.preventDefault();
        let body = {
            "logUUID": "string",
            "name": form.categoryItemName,
            "sid": localStorage.getItem('sessionId'),
            "value": form.style
        }
        axios.post('admin/createCategory', body).then((res) => {
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
                    <h4 className="bold"> Enter Category Name </h4>
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
                            <div className="fd m_tb_15"> <button type="submit" onClick={(e) => createCat(e)} className="btn_1"> <Link to="category_create"> Submit </Link> </button> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default CategoryCreate;