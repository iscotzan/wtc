import React from 'react';
import MoonSvg from './../../../../assets/moon-1898047.svg';
import {motion} from 'framer-motion';

interface MoonProps {
}

const Moon = (props: MoonProps) => {
    return (
        <motion.img drag dragConstraints={{top: 100, bottom: 10, left: 10, right: 10}}
                    style={{
                        height: '100px', width: '200px', position: 'absolute',
                        top: '70px',
                        right: '80px'
                    }} src={MoonSvg}/>
    );
}

export default Moon;