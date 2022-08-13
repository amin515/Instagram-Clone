
import React from 'react';
import './TopBar.scss';
import { GrSearch } from "react-icons/gr";
import { AiFillHome } from "react-icons/ai";
import { FiSend, FiPlusSquare } from "react-icons/fi";
import { AiOutlineCompass, AiOutlineHeart } from "react-icons/ai";
const TopBar = () => {
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
                  <li><a href="https://ibb.co/Yt0Nx12"><img src="https://i.ibb.co/4j1FHXW/295776538-457934336162409-5961947184979946612-n.jpg" alt="295776538-457934336162409-5961947184979946612-n" border="0"/></a></li>
              </ul>
          </div>
       </div>
      </div>
    </div>
  )
}

export default TopBar;
