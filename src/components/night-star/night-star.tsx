import React from 'react';
import './night-star.scss'
import {motion} from "framer-motion"

function NightStar(props: any) {
    const stars = 1600;
    const size = {min: 1, max: 4}
    const nightContainerVariants = {
        hidden: {opacity: 0},
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.5,
                staggerDirection: -1
            }
        }
    }
    const createStars = () => {
        let starElements = [];
        const starVariants = {
            initial: {opacity: Math.random()},
            show: {opacity: 1,}
        }
        for (let i = 0; i < stars; i += 1) {
            const starHeightAndWidth = (Math.random() * (size.max - size.min) + size.min) / 10 + 'vmin';
            const starStyle = {
                top: Math.random() * 100 + 'vh',
                left: Math.random() * 100 + 'vw',
                width: starHeightAndWidth,
                height: starHeightAndWidth
            }
            starElements.push(<motion.div
                variants={starVariants}
                transition={{duration: 1, repeat: Infinity}}
                key={i} style={starStyle} className='night-star__star'/>)
        }
        return (<div className='night-star'>
            {starElements}
        </div>);
    }
    return (
        <>
            {createStars()}
        </>
    );
}

export default NightStar;