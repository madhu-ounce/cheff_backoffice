import { useEffect } from "react";
import { getCategories } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const CategoryList = () => {

    const dispatch = useDispatch(getCategories); 
    useEffect(()=>{
        let body = {
            "logUUID": "string",
            "sid": localStorage.getItem('sessionId')
          }
        dispatch(getCategories(body))
    },[])

    const categoryItems =  useSelector((state) => state.catList);
    console.log( categoryItems )
    let catItems = categoryItems.itemsList;

    console.log(catItems)

    return (<>
        <div className="p_30">
            <div className="fd m_tb_15"> <button type="button"  className="btn_1 w_250"> <Link to="category_create"> + New Category </Link> </button> </div>
            <div className="box_1 fd">
                <table className="table_1">
                    <thead>
                        <tr>
                            <th> Category Name  </th>
                            <th> Status </th>
                            <th> value </th>
                            <th> createDateTime </th>
                            <th> Edit </th>
                        </tr>
                    </thead>
                    <tbody> 
                        {catItems?.map((item, i) => (<tr key={i}> 
                            <td> {item.name} </td> 
                            <td> {item.status} </td> 
                            <td> {item.value} </td> 
                            <td> {item.createDateTime} </td>  
                            {/* <td> <Link to={{     
         pathname: '/category_edit',
         state: "Madhu"
        }}>  <i class="fa-solid fa-pen-to-square"></i> </Link> </td>  */}
                            <td> <Link to="/category_edit" state={{item}}>  <i class="fa-solid fa-pen-to-square"></i> </Link> </td> 
                        </tr>) )}
                    </tbody>
                </table>
            </div>
        </div>
    </>)
}

export default CategoryList;