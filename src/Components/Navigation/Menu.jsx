import React from 'react';
import { motion } from 'framer-motion';
import { MenuItems } from './MenuItems';

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const itemIds = [0, 1, 3];

export function Menu() {
    <motion.ul className="m-0 p-6 absolute top-24 w-56" variants={variants}>
        {itemIds.map((i) => (
            <MenuItems i={i} key={i} />
        ))}
    </motion.ul>;
}
