import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Eng from '../../assets/english-language.png'
import './Navbar.scss'

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Wrapper">
        {/* Left Section */}
        <div className="Left">

          <div className="Item">
            <img src={Eng} alt="English" />
            <ExpandMoreIcon />
          </div>
          <div className="Item">
            <span>USD</span>
            <ExpandMoreIcon />
          </div>
          <div className="Item">
            <Link to="/Products/1" className='Link'>Men</Link>
          </div>
          <div className="Item">
            <Link to="/Products/2" className='Link'>Women</Link>
          </div>
          <div className="Item">
            <Link to="/Products/3" className='Link'>Childrens</Link>
          </div>

        </div>

        {/* Center Section */}
        <div className="Center">
          <Link to="/" className='Link'>GrabX</Link>
        </div>

        {/* Right Section */}
        <div className="Right">

          <div className="Item">
            <Link to="/" className='Link'>Homepage</Link>
          </div>
          <div className="Item">
            <Link to="/" className='Link'>About</Link>
          </div>
          <div className="Item">
            <Link to="/" className='Link'>Contact</Link>
          </div>
          <div className="Item">
            <Link to="/" className='Link'>Stores</Link>
          </div>

          <div className="Icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="CartIcon">
              <ShoppingCartOutlinedIcon />
              <span className="CartCount">2</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Navbar
