

import TopBar from '../TopBar/TopBar';
import { FiMoreHorizontal } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { BiBookmark } from "react-icons/bi";
import { BsHeart, BsEmojiSmile } from "react-icons/bs";
import './Home.scss'
import Cookie from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';
import LoaderContext from '../../Context/LoaderContext';
const Home = () => {

  // use context
  const { dispatch , user} = useContext(AuthContext)
  // navigato
  const navigate = useNavigate();

  // loader context
  const { loaderDispatch } = useContext(LoaderContext)
 
  // logout user
  const handleLogout = (e) => {
  e.preventDefault();
  
  Cookie.remove('token');
  Cookie.remove('user');
  dispatch({type : 'USER_LOGOUT'});
  navigate('/login');
  loaderDispatch({ type : 'LOADING_START'});
  }





  return (
    <div>
     {/* <Authtemp /> */}
     <TopBar />
     <div className="home-container">
      <div className="home-wrapper">
        <div className="timeline">
           <div className="post-card">
            <div className="post-header">
              <div className="post-user-info">
              <img src={`${user.photo ? user.photo : 'https://cdn2.vectorstock.com/i/1000x1000/23/81/default-avatar-profile-icon-vector-18942381.jpg'}`}/>
                <div className="user-details">
                  <a href="#" className="user-name">{user.name}</a>
                  <span className="location">{user.location}</span>
                </div>
              </div>
              <div className="post-usr-opt">
               <button><FiMoreHorizontal /></button>
              </div>
            </div>
            <div className="post-image">
               <img src="https://i.ibb.co/4j1FHXW/295776538-457934336162409-5961947184979946612-n.jpg"/>
            </div>
            <div className="comment-icons">
              <div className="icon-left">
                <a href='#'><BsHeart /></a>
                <a href='#'><FaRegComment /></a>
                <a href='#'><FiSend /></a>
              </div>
              <div className="icon-right">
                <a href='#'><BiBookmark/></a>
              </div>
            </div>
            <div className="comment-sec">
               <div className="comment-wrapper">
               <span>615 Likes</span>
               <span className="com-text">
                <a href="#" className="auth-name">Nur Amin</a>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati expedita aut eum quidem reiciendis quam, fugit debitis! Perspiciatis, nesciunt expedita!
                </span>
                <a href="#" className="view-comm">
                  view all 47 comments
                </a>
                <span className="day-before">
                  1 day ago
                </span>
               </div>
            </div>
            <div className="message-sec">
              <button><BsEmojiSmile/></button>
              <input type="text" placeholder='type message'/>
              <a href="#" className="post">Post</a>
            </div>
           </div>

           <div className="post-card">

            <div className="post-header">
              <div className="post-user-info">
              <img src={user.photo}/>
                <div className="user-details">
                  <a href="#" className="user-name">{user.name}</a>
                  <span className="location">Bogura</span>
                </div>
              </div>
              <div className="post-usr-opt">
               <button><FiMoreHorizontal /></button>
              </div>
            </div>
            <div className="post-image">
               <img src="https://i.ibb.co/4j1FHXW/295776538-457934336162409-5961947184979946612-n.jpg"/>
            </div>
            <div className="comment-icons">
              <div className="icon-left">
                <a href='#'><BsHeart /></a>
                <a href='#'><FaRegComment /></a>
                <a href='#'><FiSend /></a>
              </div>
              <div className="icon-right">
                <a href='#'><BiBookmark/></a>
              </div>
            </div>
            <div className="comment-sec">
               <div className="comment-wrapper">
               <span>615 Likes</span>
               <span className="com-text">
                <a href="#" className="auth-name">Nur Amin</a>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati expedita aut eum quidem reiciendis quam, fugit debitis! Perspiciatis, nesciunt expedita!
                </span>
                <a href="#" className="view-comm">
                  view all 47 comments
                </a>
                <span className="day-before">
                  1 day ago
                </span>
               </div>
            </div>
            <div className="message-sec">
              <button><BsEmojiSmile/></button>
              <input type="text" placeholder='type message'/>
              <a href="#" className="post">Post</a>
            </div>
           </div>

           <div className="post-card">

            <div className="post-header">
              <div className="post-user-info">
              <img src="https://i.ibb.co/4j1FHXW/295776538-457934336162409-5961947184979946612-n.jpg"/>
                <div className="user-details">
                  <a href="#" className="user-name">Nur Amin</a>
                  <span className="location">Bogura</span>
                </div>
              </div>
              <div className="post-usr-opt">
               <button><FiMoreHorizontal /></button>
              </div>
            </div>
            <div className="post-image">
               <img src="https://i.ibb.co/4j1FHXW/295776538-457934336162409-5961947184979946612-n.jpg"/>
            </div>
            <div className="comment-icons">
              <div className="icon-left">
                <a href='#'><BsHeart /></a>
                <a href='#'><FaRegComment /></a>
                <a href='#'><FiSend /></a>
              </div>
              <div className="icon-right">
                <a href='#'><BiBookmark/></a>
              </div>
            </div>
            <div className="comment-sec">
               <div className="comment-wrapper">
               <span>615 Likes</span>
               <span className="com-text">
                <a href="#" className="auth-name">Nur Amin</a>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati expedita aut eum quidem reiciendis quam, fugit debitis! Perspiciatis, nesciunt expedita!
                </span>
                <a href="#" className="view-comm">
                  view all 47 comments
                </a>
                <span className="day-before">
                  1 day ago
                </span>
               </div>
            </div>
            <div className="message-sec">
              <button><BsEmojiSmile/></button>
              <input type="text" placeholder='type message'/>
              <a href="#" className="post">Post</a>
            </div>
           </div>

           <div className="post-card">

            <div className="post-header">
              <div className="post-user-info">
              <img src="https://i.ibb.co/4j1FHXW/295776538-457934336162409-5961947184979946612-n.jpg"/>
                <div className="user-details">
                  <a href="#" className="user-name">Nur Amin</a>
                  <span className="location">Bogura</span>
                </div>
              </div>
              <div className="post-usr-opt">
               <button><FiMoreHorizontal /></button>
              </div>
            </div>
            <div className="post-image">
               <img src="https://i.ibb.co/4j1FHXW/295776538-457934336162409-5961947184979946612-n.jpg"/>
            </div>
            <div className="comment-icons">
              <div className="icon-left">
                <a href='#'><BsHeart /></a>
                <a href='#'><FaRegComment /></a>
                <a href='#'><FiSend /></a>
              </div>
              <div className="icon-right">
                <a href='#'><BiBookmark/></a>
              </div>
            </div>
            <div className="comment-sec">
               <div className="comment-wrapper">
               <span>615 Likes</span>
               <span className="com-text">
                <a href="#" className="auth-name">Nur Amin</a>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati expedita aut eum quidem reiciendis quam, fugit debitis! Perspiciatis, nesciunt expedita!
                </span>
                <a href="#" className="view-comm">
                  view all 47 comments
                </a>
                <span className="day-before">
                  1 day ago
                </span>
               </div>
            </div>
            <div className="message-sec">
              <button><BsEmojiSmile/></button>
              <input type="text" placeholder='type message'/>
              <a href="#" className="post">Post</a>
            </div>
           </div>

        </div>
        <div className="recommended-info">
         <div className="follow-sec">
         <img src={`${user.photo ? user.photo : 'https://cdn2.vectorstock.com/i/1000x1000/23/81/default-avatar-profile-icon-vector-18942381.jpg'}`}/>
         <div className="user-info">
         <span className="username">{user.username}</span>
         <span className="name">{user.name}</span>
         </div>
         </div>
         <a href="#" className="switch-btn">Switch</a>
         <a href="#" className="switch-btn" onClick={ handleLogout }>Log uot</a>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Home;
