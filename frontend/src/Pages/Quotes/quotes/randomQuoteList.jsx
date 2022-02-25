import React from 'react';
import { motion } from 'framer-motion';
import '../../../scss/main.scss';

function quoteList({quotes}) {

    if(quotes === undefined) {
        quotes = [{
            author: 'No authors found',
            body: 'No quotes found.'
        }]
    }

    return(
        <div className="quotes-c">
            {
                quotes.map((quoteId, i) => {
                    if((i+1) % 2 === 0){
                        return <motion.div
                            key={(i+1)}
                            className='quote'
                            initial={{ opacity:0, translateY: '-10%', translateX: '10%'}}
                            animate={{ opacity:1, translateY: 0, translateX: 0}}
                            transition={{ duration: 0.3, delay: i * 0.2}}
                            >
                                <h1>"{quoteId.body}"</h1>
                                <div className="h5-wrapper">
                                <h5>- {quoteId.author}</h5>
                                </div>
                            </motion.div>
                    }else {
                        return <motion.div
                            key={(i+1)}
                            className='quote'
                            initial={{ opacity:0, translateY: '-10%', translateX: '-10%'}}
                            animate={{ opacity:1, translateY: 0, translateX: 0}}
                            transition={{ duration: 0.3, delay: i * 0.2}}
                            >
                                <h1>"{quoteId.body}"</h1>
                                <div className="h5-wrapper">
                                <h5>- {quoteId.author}</h5>
                                </div>
                            </motion.div>
}
                })
            }
        </div>
    )
}

export default quoteList;


