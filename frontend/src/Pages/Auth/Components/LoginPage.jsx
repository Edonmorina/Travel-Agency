import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import '../../../scss/main.scss';
import manAndBook from '../assets/man-in-front-of-an-open-book.svg';
import { containerVariants } from './framer_variants/loginPageVariants';
import LoginForm from './LoginForm';
import ForgotPasswordPopup from './ForgotPasswordPopup';


function LoginPage() {   
    

    const [popupOpen, setPopupOpen] = useState(false);

    return(
        <div className="login-page">
            <AnimatePresence exitBeforeEnter>
            {popupOpen && <ForgotPasswordPopup isPopupOpen={popupOpen} setPopupOpen={setPopupOpen}/>}
            </AnimatePresence>
            <motion.div className="left-login"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
                <img src={manAndBook} alt="manAndBook" />
                <h2>Start your quoting journey</h2>
            </motion.div>   
            
            <LoginForm isPopupOpen={popupOpen} setIsPopupOpen={setPopupOpen}/>
        </div>
    )
}

export default LoginPage;