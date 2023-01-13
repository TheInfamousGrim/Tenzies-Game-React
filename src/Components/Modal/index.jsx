import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { faXmark } from '@fortawesome/pro-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Backdrop from '../Backdrop';

const dropIn = {
    hidden: {
        y: '-100vh',
        opacity: 0,
    },
    visible: {
        y: '0',
        opacity: 1,
        transition: {
            duration: 0.1,
            type: 'spring',
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: '100vh',
        opacity: 0,
    },
};

const ModalText = ({ numberOfRolls, timeToTenzie }) => (
    <div className="modal-text">
        <h3 className="uppercase font-bold">{`🎲 Number of Rolls: ${numberOfRolls.toString()}`}</h3>
        <h3 className="uppercase font-bold">{`⏳ Time: ${numberOfRolls.toString()}`}</h3>
    </div>
);

const ModalButton = ({ onClick, label }) => (
    <motion.button
        className="btn bg-accent"
        type="button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
    >
        {label}
    </motion.button>
);

const Modal = ({ close, numberOfRolls, rollDice, setModalOpen }) => (
    <Backdrop onClick={close}>
        <motion.div
            className="h-96 min-h-96 w-96 m-auto p-1 rounded-xl flex flex-col justify-around items-center drop-shadow-2xl bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 z-50"
            onClick={close}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r h-full w-full rounded-xl p-5 text-secondary">
                <div className="text-3xl font-extrabold uppercase flex justify-between w-full">
                    <h1 className="text-shadow">Results</h1>
                    <motion.button
                        type="button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        whileFocus={{ scale: 1.1 }}
                        onClick={close}
                    >
                        <FontAwesomeIcon
                            icon={faXmark}
                            className="drop-shadow bg-transparent"
                        />
                    </motion.button>
                </div>
                <div className="flex flex-col justify-center h-full text-xl">
                    <ModalText numberOfRolls={numberOfRolls} />
                    <div className="flex justify-center">
                        <ModalButton
                            onClick={close}
                            label="Close"
                            className="w-8"
                        />
                    </div>
                </div>
                <div className="" />
            </div>
        </motion.div>
    </Backdrop>
);
export default Modal;
