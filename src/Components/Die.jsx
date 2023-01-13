import React from 'react';
import { motion } from 'framer-motion';
import { nanoid } from 'nanoid';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDiceOne,
    faDiceTwo,
    faDiceThree,
    faDiceFour,
    faDiceFive,
    faDiceSix,
} from '@fortawesome/pro-solid-svg-icons';

export default function Die({ diceNumber, isHeld, setDice, dieId, isRolling }) {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    function holdDice(currentDieId) {
        setDice((oldDice) =>
            oldDice.map((oldDie) =>
                oldDie.id === currentDieId
                    ? { ...oldDie, isHeld: !oldDie.isHeld }
                    : oldDie
            )
        );
    }

    const dieGeneralClasses =
        'w-12 h-12 md:w-24 md:h-24 drop-shadow-lg mx-auto rounded-lg hover:cursor-pointer transform ease-linear';

    function diceNumberString(diceDots) {
        switch (diceDots) {
            case 1:
                return faDiceOne;
            case 2:
                return faDiceTwo;
            case 3:
                return faDiceThree;
            case 4:
                return faDiceFour;
            case 5:
                return faDiceFive;
            default:
                return faDiceSix;
        }
    }

    return (
        <motion.button
            type="button"
            className="outline-transparent ring-transparent bg-red"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            whileFocus={{ scale: 1.1 }}
            onKeyUp={(e) => {
                if (e.key === 'Enter')
                    holdDice(e.currentTarget.firstElementChild.dataset.dieId);
            }}
        >
            <FontAwesomeIcon
                className={classNames(
                    isHeld ? 'text-success' : 'text-accent',
                    isRolling && !isHeld ? 'fa-shake' : '',
                    dieGeneralClasses
                )}
                icon={diceNumberString(diceNumber)}
                data-die-id={dieId}
                onClick={(e) => holdDice(e.currentTarget.dataset.dieId)}
                onKeyDown={(e) => console.log('hello')}
            />
            <p className="mt-4 text-base text-gray-300 sr-only">
                {`Number on Dice: ${diceNumber.toString()}`}
            </p>
        </motion.button>
    );
}
