import React, { useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import '../../../scss/main.scss'
import { motion } from 'framer-motion';
import { FiAlertCircle } from 'react-icons/fi';
import { containerVariants, h1Variant, inputFieldEmailVariant, inputFieldPasswordVariant, inputFieldRePasswordVariant, btnVariant, h6Variant } from './framer_variants/registerPageVariants';
import hotelStaff from '../assets/hotel_staff.svg'

import axios from 'axios';

function RegisterPage() {
    const uidRef = useRef(null);
    const pwdRef = useRef(null);
    const rePwdRef = useRef(null);
    const emailRef = useRef(null);

    const [uid, setUid] = useState("");
    const [uidError, setUidError] = useState(false);
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [pwd, setPwd] = useState("");
    const [pwdPower, setPwdPower] = useState("Enter Password");
    const [pwdPowerBarStyle, setPwdPowerBarStyle] = useState({
        width: '100%',
        backgroundColor: 'rgba(223, 219, 219, 0.0)',
    });
    const [rePwd, setRePwd] = useState("");
    const [rePwdError, setRePwdError] = useState(false);

    const [gotRegistered, setGotRegistered] = useState(false);

    const [errorMsg, setErrorMsg] = useState("");

    const clearAllInputFields = () => {
        clearUid();
        clearEmail();
        clearPwd();
        clearRePwd();
        setPwdPower("Enter Password");
            setPwdPowerBarStyle({
                width: '100%',
                backgroundColor: 'rgba(223, 219, 219, 0.0)',
            });
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

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length == 0) {
            setEmailError(true);
            e.target.style.border = '1px solid red';
        } else if(e.target.value.length > 0) {
            setEmailError(false);
            e.target.style.border = 'none';
        }
    }

    const handlePasswordChange = (e) => {
        setPwd(e.target.value);
        
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
        if(strongRegex.test(e.target.value)) {
            setPwdPower("Strong");
            setPwdPowerBarStyle({
                width: '100%',
                border: 'none',
                backgroundColor: 'green'
            });
        } else if(mediumRegex.test(e.target.value)) {
            setPwdPower("Medium");
            setPwdPowerBarStyle({
                width: '75%',
                border: 'none',
                backgroundColor: 'orange'
            });
        } else if(e.target.value.length <= 3 && e.target.value.length > 0) {
            setPwdPower("Very Weak");
            setPwdPowerBarStyle({
                width: '25%',
                border: 'none',
                backgroundColor: 'red'
            });
        } else if(e.target.value.length <= 6 && e.target.value.length > 0) {
            setPwdPower("Weak");
            setPwdPowerBarStyle({
                width: '50%',
                border: 'none',
                backgroundColor: 'orangered'
            });
        } else if(e.target.value.length == 0){
            setPwdPower("Enter Password");
            setPwdPowerBarStyle({
                width: '100%',
                backgroundColor: 'rgba(223, 219, 219, 0.0)',
            });
        }
    }

    const handleRePasswordChange = (e) => {
        setRePwd(e.target.value);
        if(e.target.value !== pwd && e.target.value.length > 0) {
            setRePwdError(true);
        } else if(e.target.value === pwd || e.target.value.length === 0) {
            setRePwdError(false);
        }
    }

    const handleUidChange = (e) => {
        setUid(e.target.value);
        if(e.target.value.length > 0 && e.target.value.length < 3) {
            setUidError(true);
            e.target.style.border = '1px solid red';
        } else if(e.target.value.length == 0 || e.target.value.length >= 3) {
            setUidError(false);
            e.target.style.border = 'none';
        }
    }

    const handleSubmit = () => {
        if(pwd !== rePwd) {
            setErrorMsg("Password is not the same");
            return;
        }

        const postUrl = 'http://localhost:8066/travel_agency_backend/includes/signup.inc.php';
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
                        onChange={(event) => handleUidChange(event)}
                        required
                        />  
                        <span className='placeholder'>Enter username</span>
                        {uidError && <div className='error-msg'><FiAlertCircle/><h1>3 or more characters</h1></div>}
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
                        onChange={(event) => handleEmailChange(event)}
                        required
                        />
                        <span className='placeholder'>Enter email</span>
                        <h6 id="emailCheck" ></h6>
                        {emailError && <div className='error-msg'><FiAlertCircle/><h1>Invalid Email</h1></div>}
                    </motion.label>

                    <motion.label // PASSWORD
                    className='custom-field'
                    id='custom-field-Password'
                    variants={inputFieldPasswordVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    >
                        
                        <input 
                        type="password" 
                        id="password" 
                        name="pwd"
                        ref={pwdRef}
                        onChange={(event) => handlePasswordChange(event)}
                        required
                        />    
                        <span className='placeholder'>Enter Password</span>
                        <h6 id="passwordCheck" ></h6>
                        <div className='password-power'><div><div style={pwdPowerBarStyle}></div></div><h1>{pwdPower}</h1></div>
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
                        onChange={(event) => handleRePasswordChange(event)}
                        required
                        />
                        <span className='placeholder'>Re-Enter Password</span>
                        <h6 id="re-passwordCheck" ></h6>
                        {rePwdError && <div className='error-msg'><FiAlertCircle/><h1>Password is not the same.</h1></div>}
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
                <img src={hotelStaff} alt="shhMan" />
            </motion.div>
            
        </div>
    )
}

export default RegisterPage;