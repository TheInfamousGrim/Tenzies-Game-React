import React, { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from '../../Hooks/useDimensions';
import { MenuToggle } from './MenuToggle';
import { Menu } from './Menu';

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

export function Navigation() {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            custom={height}
            className="absolute top-0 left-o bottom-0 w-300 z-50"
            ref={containerRef}
        >
            <motion.div
                className="absolute top-0 left-0 bottom-0 w-72 bg-white"
                variants={sidebar}
            />
            <Menu />
            <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
    );
}
