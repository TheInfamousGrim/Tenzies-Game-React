import React from 'react';
import { motion } from 'framer-motion';

const style = { color: '#000000e1' };

const Backdrop = ({ children, onClick }) => (
    <motion.div
        className="absolute top-0 left-0 h-full w-full flex justify-center z-10"
        onClick={onClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={style}
    >
        {children}
    </motion.div>
);

export default Backdrop;
