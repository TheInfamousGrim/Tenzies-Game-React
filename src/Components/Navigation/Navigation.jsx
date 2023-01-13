import React, { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice, faTimer } from '@fortawesome/pro-solid-svg-icons';

// Custom Hooks
import { useDimensions } from '../../Hooks/useDimensions';

// Components
import { MenuToggle } from './MenuToggle';
import Divider from '../Divider';

// TODO: Add functionality for a high score system

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: 'spring',
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: 'circle(30px at 40px 40px)',
        transition: {
            delay: 0.5,
            type: 'spring',
            stiffness: 400,
            damping: 40,
        },
    },
};

const menuVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const menuItemsVariants = {
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

export function Navigation({ numberOfRolls }) {
    // State
    const [isOpen, toggleOpen] = useCycle(false, true);

    // Height of navbar
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    // Custom style
    const style = { color: `${colors[1]}` };

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            custom={height}
            ref={containerRef}
            className="z-10"
        >
            <motion.div
                className="absolute top-0 left-0 bottom-0 w-72 bg-white"
                variants={sidebar}
            />
            <motion.ul
                className="p-6 absolute top-24 w-64"
                variants={menuVariants}
            >
                <motion.li
                    className="list-none mb-5"
                    variants={menuItemsVariants}
                >
                    <Divider dividerText="Current Game" />
                </motion.li>
                <motion.li
                    className="list-none mb-5 flex items-center gap-2 cursor-pointer"
                    variants={menuItemsVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FontAwesomeIcon
                        icon={faDice}
                        className="text-3xl"
                        style={style}
                    />
                    <div className="w-52 h-5 uppercase font-bold" style={style}>
                        <p>{`Rolls: ${numberOfRolls.toString()}`}</p>
                    </div>
                </motion.li>
                <motion.li
                    className="list-none mb-5 flex items-center gap-2 cursor-pointer"
                    variants={menuItemsVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FontAwesomeIcon
                        icon={faTimer}
                        className="text-3xl"
                        style={style}
                    />
                    <div className="w-52 h-5 uppercase font-bold" style={style}>
                        <p>Current Time:</p>
                    </div>
                </motion.li>
                <motion.li
                    className="list-none mb-5"
                    variants={menuItemsVariants}
                >
                    <Divider dividerText="High Scores" />
                </motion.li>
            </motion.ul>
            <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
    );
}
