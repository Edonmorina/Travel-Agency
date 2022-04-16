import React, { useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import '../../../scss/main.scss';
import hotel_staff from '../assets/hotel_staff.svg';
import { motion } from 'framer-motion';
import { containerVariants, h1Variant, inputFieldEmailVariant, inputFieldPasswordVariant, inputFieldRePasswordVariant, btnVariant, h6Variant } from './framer_variants/registerPageVariants';
import { signUp } from '../../../Firebase/Auth/signUp';

const RegisterPage = () => {
    const emailRef = useRef(null);
    const pwdRef = useRef(null);

    const [gotRegistered, setGotRegistered] = useState(false);
    
    const handleSignUp = () => {
        const email = emailRef.current.value;
        const password = pwdRef.current.value;
        
        signUp(email,password).then((userCredential) => console.log(userCredential)).catch(err => console.log(err.message));
    
    }

    const [errorMsg, setErrorMsg] = useState("");

    const clearAllInputFields = () => {
        clearField(emailRef);
        clearField(pwdRef);
    }

    const clearField = (ref) => {
        ref.current.value = "";
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

                    {/* <motion.label // USERNAME
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

                    </motion.label> */}

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
                        required
                        />    
                        <span className='placeholder'>Enter Password</span>
                        <h6 id="passwordCheck" ></h6>

                    </motion.label>

                    {/* <motion.label // RE-PASSWORD
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
                    
                    </motion.label> */}

                    <motion.div // SUBMIT BTN
                    className="btnWrapper"
                    variants={btnVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    >

                        <button
                        className='registerBtn'
                        onClick={() => {handleSignUp()}}
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
                <img src={hotel_staff} alt="shhMan" />
            </motion.div>
            
        </div>
    )
}

export default RegisterPage;