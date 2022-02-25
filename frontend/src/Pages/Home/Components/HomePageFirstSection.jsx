import React from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import '../../../scss/main.scss';
import upQoute from '../assets/upQuote.svg';
import downQoute from '../assets/downQuote.svg';
import Lottie from "lottie-web";

function HomePageFirstSection() {

    let animationContainer = React.createRef();

    React.useEffect(() => { 

        setTimeout(() => {
            Lottie.loadAnimation({
                container: animationContainer.current,
                renderer: 'svg',
                path: '/animations/handWrite.json',
                frameRate: 60,
                loop: false,
            })
        },2700)
        
    }, [])

    return(
        <section className="home-fs" onLoad={window.scroll(0,0)}>
   
            <div className="first-container">
                <div className="fs-ls">
                    <motion.h1 
                    initial={{x: '-100vw', opacity: 0}} 
                    animate={{x: 0, opacity: 1}} 
                    transition={{delay: 1, type: 'spring', stiffness:50}}>
                        Quote your
                    </motion.h1>

                    <motion.h1 

                    initial={{x: '-100vw', opacity: 0}} 
                    animate={{x: 0, opacity: 1}} 
                    transition={{delay: 1.25, type: 'spring', stiffness:50}}>
                        Life
                    </motion.h1>

                    <motion.h1 

                    initial={{x: '-100vw', opacity: 0}} 
                    animate={{x: 0, opacity: 1}} 
                    transition={{delay: 1.5, type: 'spring', stiffness:50}}>
                        With Us
                    </motion.h1>
                </div>

                <div className="fs-mobile">
                    <motion.h1 
                    initial={{y: '10vh', opacity: 0}} 
                    animate={{y: 0, opacity: 1}} 
                    transition={{delay: .25, type: 'spring', stiffness:30}}>
                        Quote your Life
                    </motion.h1>

                    <motion.h1 
                    className="last-header-text"
                    initial={{y: '10vh', opacity: 0}} 
                    animate={{y: 0, opacity: 1}} 
                    transition={{delay: .5, type: 'spring', stiffness:30}}>
                        With Us
                    </motion.h1>
                    <Link to='/quotes' className="fs-mobile-btn-wrapper">
                    <motion.button 
                    className="fs-mobile-btn"
                    initial={{y: '10vh', opacity: 0}} 
                    animate={{y: 0, opacity: 1}} 
                    transition={{delay: .75, type: 'spring', stiffness:60}}>
                        QUOTES!
                    </motion.button>   
                    </Link> 
                </div>
                
                

                <div className="fs-rs">
                    <div className="animationContainer" ref={animationContainer}>
                    <div className="up-quote-c">
                        
                        <motion.img 
                        src={upQoute} 
                        className="f-up-quote" 
                        alt="single-quote" 
                        initial={{y:'-10vh', opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{delay: 1}}/>

                        <motion.img 
                        src={upQoute} 
                        className="s-up-quote"  
                        alt="single-quote"
                        initial={{y:'-10vh', opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{delay: 1.2}}/>
                    </div>
                        <div className="down-quote-c">
                        
                        <motion.img 
                        src={downQoute} 
                        className="f-down-quote"
                        alt="single-quote" 
                        initial={{y:'10vh', opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{delay: 1.05}}
                        />
                        
                        <motion.img 
                        src={downQoute} 
                        className="s-down-quote" 
                        alt="single-quote" 
                        initial={{y:'10vh', opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{delay: 1.25}}/>
                    </div>
                    </div>                    
                </div>

            </div>

            <motion.div 
            className="main-btn-c"
            initial={{y:'50vh', opacity: 0}} 
                animate={{y: 0, opacity: 1,}} 
                transition={{type: 'spring', stiffness: 85, duration: 2}}>
                <Link to='/quotes'>
                <motion.button 
                whileHover={{scale:1.1}}
                >
                    Explore Quotes
                </motion.button>
                </Link>
            </motion.div>
        </section>
    )
}

export default HomePageFirstSection;