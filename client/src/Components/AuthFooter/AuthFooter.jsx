
import React from 'react'
import './AuthFooter.scss'
const AuthFooter = () => {
  return (
    <div>
      <div className="copy-right-area">
        <ul>
            <li><a href="#">Meta</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Job</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Api</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Top Account</a></li>
            <li><a href="#">Hashtag</a></li>
            <li><a href="#">Location</a></li>
            <li><a href="#">Instgram Lite</a></li>
            <li><a href="#">Contact Uploading & Non-Users</a></li>
            <li><a href="#">Dance</a></li>
            <li><a href="#">Food & Drinks</a></li>
            <li><a href="#">Home & Grarden</a></li>
            <li><a href="#">Music</a></li>
            <li><a href="#">Visual Arts</a></li>
        </ul>
        <div className="select-option-tag">
            <select>
                <option value="English">English</option>
                <option value="Bangla">Bangla</option>
                <option value="Hindi">Hindi</option>
                <option value="Arabic">Arabic</option>
                <option value="Bhasa Indonesia">Bhasa Indonesia</option>
                <option value="Bhasa Melayu">Bhasa Melayu</option>
            </select>
            &copy; 2022 Instgram from meta
        </div>
      </div>
    </div>
  )
}

export default AuthFooter
