import React from 'react';
import { motion } from 'framer-motion';
import { faDice } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
};

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

export function MenuItems({ i }) {
    const style = { border: `2px solid ${colors[i]}`, color: `${i}` };
    return (
        <motion.li
            className="list-none mb-5 flex items-center cursor-pointer m-0 p-0"
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <FontAwesomeIcon
                className="w-10 h-10 rounded-full flex-auto mr-5"
                style={style}
                icon={faDice}
            />
            <div className="w-48 h-5 flex-1" style={style}>
                <p>Number of Rolls</p>
            </div>
        </motion.li>
    );
}
