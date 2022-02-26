import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { h1Variant, inputFieldEmailVariant, inputFieldPasswordVariant, btnVariant, h6Variant } from './framer_variants/loginPageVariants';

import { loginEmailPassword as signIn} from '../../../Firebase/Auth/signIn';

function LoginForm({isPopupOpen, setIsPopupOpen}) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignIn = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signIn(email,password).then((userCredential) => console.log(userCredential.user)).catch(err => console.error(err.message));
  }

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  }

  return <div
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
          <input type="email" name='email' ref={emailRef} required/>
          <span className='placeholder'>Enter email</span>
      </motion.label>


      <motion.label 
        className='custom-field password'
        variants={inputFieldPasswordVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
          <input type="password" id="password" name='password' ref={passwordRef} required/>
          <span className='placeholder'>Enter Password</span>
      </motion.label>


      <motion.div className="btnWrapper"
        variants={btnVariant}
        initial="hidden"
        animate="visible"
        exit="exit">
        <button
        className='loginBtn'
        onClick={() => handleSignIn()}
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
</div>;
}

export default LoginForm;
