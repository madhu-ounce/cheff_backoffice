import { Routes, Route } from 'react-router-dom';
import ProfileComponent from './profile';
import DashboardComponent from './dashboard';
import CategoryList from './categories/category_list';
import CategoryCreate from './categories/category_create';
import CategoryEdit from './categories/category_edit';
const ContentComponent = () => {
    return (
        <div>
            {/* <div className='HeaderTop'> Logout </div> */}
            <Routes>
                <Route path="/" exact element={<ProfileComponent />} />
                <Route path="/dashboard" exact element={<DashboardComponent />} />
                <Route path="/profile" exact element={<ProfileComponent />} />
                <Route path='/categories' exact element={<CategoryList />} />
                <Route path='categories/category_create' exact element={<CategoryCreate/>} />
                <Route path='/category_edit' exact element={<CategoryEdit/>} />
            </Routes> 
        </div>
    )
}
export default ContentComponent;