import React, { useState } from 'react';

export default function Die({ diceNumbers }) {
    return (
        <div className="w-24 h-24 shadow-below mx-auto flex justify-center items-center rounded-lg bg-white">
            <p className="font-bold text-2xl">{diceNumbers.toString()}</p>
        </div>
    );
}
