import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { h1Variant, inputFieldEmailVariant, inputFieldPasswordVariant, btnVariant, h6Variant } from './framer_variants/loginPageVariants';
import axios from 'axios';


function LoginForm({isPopupOpen, setIsPopupOpen}) {

  const [uid, setUid] = useState("");
  const [pwd, setPwd] = useState("");

  const handleLoginAuth = () => {
    const postUrl = 'http://localhost:8066/quotes_app_backend/includes/signup.inc.php';
    const formData = new FormData();
    formData.append('uid', uid);
    formData.append('pwd', pwd);
    axios.post(postUrl, formData)
      .then(res => {
        console.log(res);
      })
  }  

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  }

  return <form
        className="right-login">
    <motion.h1 
        variants={h1Variant}
        initial="hidden"
        animate="visible"
        exit="exit"
    >
        Login
    </motion.h1>

      <motion.label 
        className='custom-field'
        variants={inputFieldEmailVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
          <input type="email" required/>
          <span className='placeholder'>Enter email</span>
      </motion.label>


      <motion.label 
        className='custom-field password'
        variants={inputFieldPasswordVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
          <input type="password" id="password" required/>
          <span className='placeholder'>Enter Password</span>
      </motion.label>


      <motion.div className="btnWrapper"
        variants={btnVariant}
        initial="hidden"
        animate="visible"
        exit="exit">
        <button
        type='submit'
        className='loginBtn'
        onClick={() => { handleLoginAuth() }}
        >
        Login!
        </button>
      </motion.div>

      <motion.h6 
      variants={h6Variant}
      initial="hidden"
      animate="visible"
      exit="exit"
      >Forgot Password? 
       <a className="auth_links" onClick={() => togglePopup()}> Recover Password</a>
    </motion.h6>

    <motion.h6 
      variants={h6Variant}
      initial="hidden"
      animate="visible"
      exit="exit"
      >Dont have an account? 
      <Link to='/auth/register' className="auth_links"> Register here</Link>
    </motion.h6>
</form>;
}

export default LoginForm;
