import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import ItemDetail from '../ItemDetail/ItemDetail';

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <Link to='/'>
                <h3 activeClassName='NavBarH3'>Kick's Hub</h3>
            </Link>
            <div className='Categories'>
                <NavLink to='/category/nike' activeClassName='ActiveOption' className='NavBarOption'>
                    Nike
                </NavLink>
                <NavLink to='/category/adidas' activeClassName='ActiveOption' className='NavBarOption'>
                    Adidas
                </NavLink>
                <NavLink to='/category/puma' activeClassName='ActiveOption' className='NavBarOption'>
                    Puma
                </NavLink>
                <NavLink to='/category/lacoste' activeClassName='ActiveOption' className='NavBarOption'>
                    Lacoste
                </NavLink>
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar;
