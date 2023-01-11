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

    function holdDice(e) {
        const currentDieId = e.currentTarget.dataset.dieId;
        setDice((oldDice) =>
            oldDice.map((oldDie) =>
                oldDie.id === currentDieId
                    ? { ...oldDie, isHeld: !oldDie.isHeld }
                    : oldDie
            )
        );
    }

    const dieGeneralClasses =
        'w-24 h-24 drop-shadow-lg mx-auto rounded-lg hover:cursor-pointer transform ease-linear';

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
        <FontAwesomeIcon
            className={classNames(
                isHeld ? 'text-success' : 'text-accent',
                isRolling && !isHeld ? 'fa-shake' : '',
                dieGeneralClasses
            )}
            icon={diceNumberString(diceNumber)}
            data-die-id={dieId}
            onClick={(e) => holdDice(e)}
        >
            {/* {numberOfDiceDots.map(() => (
                <motion.div
                    key={nanoid()}
                    className="bg-accent h-5 w-5 rounded-full mx-auto my-auto"
                />
            ))} */}
        </FontAwesomeIcon>
    );
}
