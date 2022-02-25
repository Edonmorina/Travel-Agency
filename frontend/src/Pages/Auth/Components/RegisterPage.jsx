import React, { useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import '../../../scss/main.scss'
import shhMan from '../assets/shh-man.svg';
import { AnimatePresence, motion } from 'framer-motion';
import { containerVariants, h1Variant, inputFieldEmailVariant, inputFieldPasswordVariant, inputFieldRePasswordVariant, btnVariant, h6Variant } from './framer_variants/registerPageVariants';

import axios from 'axios';

function RegisterPage() {
    const uidRef = useRef(null);
    const pwdRef = useRef(null);
    const rePwdRef = useRef(null);
    const emailRef = useRef(null);

    const [uid, setUid] = useState("");
    const [pwd, setPwd] = useState("");
    const [rePwd, setRePwd] = useState("");
    const [email, setEmail] = useState("");

    const [gotRegistered, setGotRegistered] = useState(false);

    const [errorMsg, setErrorMsg] = useState("");

    const clearAllInputFields = () => {
        clearUid();
        clearEmail();
        clearPwd();
        clearRePwd();
    }

    const clearUid = () => {
        uidRef.current.value = "";
    }

    const clearPwd = () => {
        pwdRef.current.value = "";
    }
    const clearRePwd = () => {
        rePwdRef.current.value = "";
    }
    
    const clearEmail = () => {
        emailRef.current.value = "";
    }

    const handleSubmit = () => {
        const postUrl = 'http://localhost:8066/quotes_app_backend/includes/signup.inc.php';
        const formData = new FormData();
        formData.append('uid', uid);
        formData.append('pwd', pwd);
        formData.append('rePwd', rePwd);
        formData.append('email', email);
        formData.append('submit', true);
        axios.post(postUrl, formData)
        .then(response => {
            console.log(response.headers.error);
            console.log(response.headers);
            if(response.status === 200 || response.status === 201) {
                if(response.headers.error === "None") {
                    setErrorMsg("Thank you for registering!");
                    clearAllInputFields();
                }
    
                if(response.headers.error === "Empty-Input"){
                    setErrorMsg("Empty Input!");
                }
    
                if(response.headers.error === "Invalid-Uid"){
                    setErrorMsg("Invalid Username!");
                    clearUid();
                }   
    
                if(response.headers.error === "Invalid-Email"){
                    setErrorMsg("Invalid Email!");
                    clearEmail();
                }
    
                if(response.headers.error === "Pwd-Dont-Match"){
                    setErrorMsg("Password dont match!");
                    clearPwd();
                    clearRePwd();
                }
    
                if(response.headers.error === "Uid-Taken"){
                    setErrorMsg("Username is taken!");
                    clearUid();
                }

                if(response.headers.error === "Email-Taken"){
                    setErrorMsg("Email is taken!");
                    clearEmail();
                }
            } else {
                setErrorMsg("Error: " + response.status);
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    return(
        <div className="register-page" >
            <div
            className="left-register"
            style={gotRegistered ? {display: 'none'} : {display: 'flex'}} 
            >
                        <motion.h1  // REGISTER H1
                        variants={h1Variant}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        >
                            Register Here!

                        </motion.h1>

                    <motion.label // USERNAME
                    className='custom-field'
                    variants={inputFieldEmailVariant}
                    initial="hidden"
                    animate="visible"
                    value={uid}
                    exit="exit"
                    >

                        <input 
                        type="text" 
                        name="uid" 
                        ref={uidRef}
                        onChange={e => {setUid(e.target.value)}}
                        required
                        />  
                        <span className='placeholder'>Enter username</span>

                    </motion.label>

                    <motion.label // EMAIL
                    className='custom-field'
                    variants={inputFieldEmailVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    >
                        <input 
                        type="email" 
                        id="email"
                        name="email"
                        ref={emailRef}
                        onChange={ e => {setEmail(e.target.value)} }
                        required
                        />
                        <span className='placeholder'>Enter email</span>
                        <h6 id="emailCheck" ></h6>

                    </motion.label>

                    <motion.label // PASSWORD
                    className='custom-field'
                    variants={inputFieldPasswordVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    >
                        
                        <input type="password" 
                        id="password" 
                        name="pwd"
                        ref={pwdRef}
                        onChange={ e => {setPwd(e.target.value)} }
                        required
                        />    
                        <span className='placeholder'>Enter Password</span>
                        <h6 id="passwordCheck" ></h6>

                    </motion.label>

                    <motion.label // RE-PASSWORD
                    className='custom-field'
                    variants={inputFieldRePasswordVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    >
                    
                        <input 
                        type="password" 
                        id="re-password"
                        ref={rePwdRef} 
                        name="rePwd"
                        onChange={e => {setRePwd(e.target.value)}}
                        required
                        />
                        <span className='placeholder'>Re-Enter Password</span>
                        <h6 id="re-passwordCheck" ></h6>
                    
                    </motion.label>

                    <motion.div // SUBMIT BTN
                    className="btnWrapper"
                    variants={btnVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    >

                        <button
                        type='submit'
                        className='registerBtn'
                        onClick={() => {handleSubmit()}}
                        >
                            Register!
                        </button>

                    </motion.div>

                    <motion.h6
                    variants={h6Variant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    >
                        You have an account? <Link to='/auth/login' className="auth_links">Login here</Link>

                    </motion.h6>

                    <motion.h6
                    variants={h6Variant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    >
                        {errorMsg}

                    </motion.h6>
            </div>
            
                <motion.h1  // REGISTERED 
                className='gotRegistered'
                style={gotRegistered ? {display: 'flex'} : {display: 'none'}}
                variants={h1Variant}
                initial="hidden"
                animate="visible"
                exit="exit"
                >
                    Registration complete !
                </motion.h1>
            

            <motion.div className="right-register"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
                <img src={shhMan} alt="shhMan" />
            </motion.div>
            
        </div>
    )
}

export default RegisterPage;