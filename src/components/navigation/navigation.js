import { Link } from 'react-router-dom';
import Logo from '../../assets/images/cheff_logo_1.svg';
import styles from '../../css/navigation.module.css';
const Navigation = () => {
    return (
        <>
            <div className='fd p_15'>
                <img className={styles.menuLogo} src={Logo} />
            </div>
            <div className='fd p_15'>
                <ul className={styles.menuList}>
                    <li> <Link to='/profile'> <i class="fa-solid fa-user"></i>  Profile </Link> </li>
                    <li> <Link to='/dashboard'> Dashboard </Link> </li>
                    <li> <Link to='/categories'> Categories </Link> </li>
                    <li> <Link to='categories/category_create'> Create Category </Link> </li>
                    <li> <Link to='/dashboard'> Create Product Item </Link> </li>
                    <li> <Link to='/dashboard'> Fetch Item </Link> </li>
                    <li> <Link to='/dashboard'> Get Bookings </Link> </li>
                    <li> <Link to='/dashboard'> Get Categories </Link> </li>
                    <li> <Link to='/dashboard'> Get Document </Link> </li>
                    <li> <Link to='/dashboard'> Get Products </Link> </li>
                    <li> <Link to='/dashboard'> Update Category </Link> </li>
                    <li> <Link to='/dashboard'> Update Item </Link> </li>
                    <li> <Link to='/dashboard'> Update Product </Link> </li>
                </ul>
            </div>
        </>
    )
}

export default Navigation;