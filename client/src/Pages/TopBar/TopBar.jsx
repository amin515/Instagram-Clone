
import React from 'react';
import './TopBar.scss';
import { GrSearch } from "react-icons/gr";
import { AiFillHome } from "react-icons/ai";
import { FiSend, FiPlusSquare } from "react-icons/fi";
import { AiOutlineCompass, AiOutlineHeart } from "react-icons/ai";
import { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';
const TopBar = () => {

  const { user } = useContext(AuthContext)
  return (
    <div>
      <div className="topbar-container">
       <div className="topbar-wrapper">
        {/* topbar logo */}
          <div className="logo">
          <a className='login-logo-link' href="#"><img className='login-log-img' src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" /></a>
          </div>
          {/* topbar search */}
          <div className="topbar-search">
          <button className='topbar-btn'><GrSearch /></button>
          <input type="text" placeholder='Search'/>
          </div>
          {/* topbar icon */}
          <div className="topbar-menu">
              <ul>
                  <li><a href="#"><AiFillHome/></a></li>
                  <li><a href="#"><FiSend/></a></li>
                  <li><a href="#"><FiPlusSquare/></a></li>
                  <li><a href="#"><AiOutlineCompass/></a></li>
                  <li><a href="#"><AiOutlineHeart/></a></li>
                  <li><a href="#"><img src={ `${user.photo ? user.photo : 'https://cdn2.vectorstock.com/i/1000x1000/23/81/default-avatar-profile-icon-vector-18942381.jpg'}` } border="0"/></a></li>
              </ul>
          </div>
       </div>
      </div>
    </div>
  )
}

export default TopBar;
