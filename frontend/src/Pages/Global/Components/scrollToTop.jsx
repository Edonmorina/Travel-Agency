import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import '../../../scss/main.scss';

function ScrollToTop() {
    const icon = <FontAwesomeIcon icon={faArrowUp} color="#D53465" size="lg" />; 

    const [visible, setVisible] = useState("scrollToTop-c");

    const listenScrollEventScrollUp = (e) => {
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const scrollYMax = scrollHeight - clientHeight;
        const percentage = 60;

        let percentWhenVisible = (scrollYMax * percentage) / 100;

        if(window.scrollY > 1 && window.scrollY > percentWhenVisible){
            setVisible("scrollToTop-c visible");
        }else {
            setVisible("scrollToTop-c");
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', listenScrollEventScrollUp);

        return () => window.removeEventListener('scroll', listenScrollEventScrollUp);
    }, [])

    return(
            <motion.button 
            className={visible}
            whileHover={{scale: 1.05}}
            whileTap={{scale: 1}}
            onClick={() => {
                let isSafari = navigator.vendor.match(/apple/i) &&
             !navigator.userAgent.match(/crios/i) &&
             !navigator.userAgent.match(/fxios/i) &&
             !navigator.userAgent.match(/Opera|OPT\//);

                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: isSafari ? 'auto' : 'smooth',
                  });
            }}
            >
                {icon}
            </motion.button>
    )
}

export default ScrollToTop;