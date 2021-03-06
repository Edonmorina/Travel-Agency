import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import '../../../scss/main.scss';
import { containerVariants } from './framer_variants/loginPageVariants';
import LoginForm from './LoginForm';
import ForgotPasswordPopup from './ForgotPasswordPopup';
import planeImage from '../assets/plane.svg';

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
                <img src={planeImage} alt="manAndBook" />
            </motion.div>   
            
            <LoginForm isPopupOpen={popupOpen} setIsPopupOpen={setPopupOpen}/>
        </div>
    )
}

export default LoginPage;