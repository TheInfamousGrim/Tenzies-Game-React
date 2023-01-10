import React, { useState } from 'react';
import { nanoid } from 'nanoid';

// Css
import './App.css';

// Components
import Die from './Components/Die';

function App() {
    const [diceNumbers, setDiceNumbers] = useState(allNewDice());

    function allNewDice() {
        const diceNumberArray = [];

        for (let i = 0; i < 10; i++) {
            const randomDiceNumber = Math.floor(Math.random() * 6 + 1);

            diceNumberArray.push(randomDiceNumber);
        }

        return diceNumberArray;
    }

    function rollDice() {
        setDiceNumbers(() => allNewDice());
    }

    return (
        <div className="App w-full h-full">
            <main className="bg-secondary h-96 max-w-3xl my-5 mx-auto rounded flex flex-col gap-5 p-5">
                <div>
                    <h1 className="font-bold text-3xl text-center">Tenzies</h1>
                    <p className="text-l text-center text-info">
                        Roll until all dice are the same. Click each die to
                        freeze it at its current value between rolls.
                    </p>
                </div>
                <div className="grid gap-4 grid-cols-5 grid-rows-2">
                    {diceNumbers.map((dieNumber) => (
                        <Die diceNumbers={dieNumber} key={nanoid()} />
                    ))}
                </div>
                <div className="flex justify-center">
                    <button
                        type="button"
                        className="btn w-fit bg-accent border-accent text-white px-10"
                        onClick={() => rollDice()}
                    >
                        Roll
                    </button>
                </div>
            </main>
        </div>
    );
}

export default App;
