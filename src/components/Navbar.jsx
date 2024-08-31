import './navbar.css'
import logo from '../assets/aindhinai-logo.png'
import { useNavigate } from 'react-router-dom';
export const Navbar = () => {
    const navigate = useNavigate();

  return (
    < >
        <nav className="nav flex flex-wrap justify-evenly">
            <div className="nav-logo" onClick={() => navigate('/home')}>
                <img src={logo} alt=''/>
            </div>
            <div className='nav-search'>
                <input className="h-12 px-4 nav-search" type="search" placeholder="Search" />
            </div>
            <div className='nav-menus'>
                <div className='nav-cart' onClick={() => navigate('/cart')}>
                <i className="fa-solid fa-basket-shopping"></i>
                <span>1</span>
                </div>
            </div>
        </nav>
    </>
  )
}

