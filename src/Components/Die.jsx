import React, { useState } from 'react';

export default function Die({ diceNumber, isHeld, setDice, dieId }) {
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

    return (
        <button
            type="button"
            className={classNames(
                isHeld ? 'bg-success' : 'bg-white',
                'w-24 h-24 shadow-below mx-auto flex justify-center items-center rounded-lg hover:cursor-pointer'
            )}
            data-die-id={dieId}
            onClick={(e) => holdDice(e)}
        >
            <p className="font-bold text-2xl">{diceNumber.toString()}</p>
        </button>
    );
}
