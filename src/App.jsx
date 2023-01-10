import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

// Css
import './App.css';

// Components
import Die from './Components/Die';

function App() {
    // State
    const [dice, setDice] = useState(allNewDice());
    const [tenzies, setTenzies] = useState(false);

    // Setup the tenzies game with random dice
    function allNewDice() {
        const diceNumberArray = [];

        for (let i = 0; i < 10; i++) {
            const randomDiceNumber = Math.floor(Math.random() * 6 + 1);

            diceNumberArray.push({
                id: nanoid(),
                value: randomDiceNumber,
                isHeld: false,
            });
        }

        return diceNumberArray;
    }

    // Check if the user has won the game
    useEffect(() => {
        // Returns true if every die isHeld and is equal
        const checkTenzies = dice.every(
            (die) => die.isHeld && die.value === dice[0].value
        );
        if (checkTenzies) return setTenzies(true);
    }, [dice]);

    // Roll all the dice that aren't currently being held
    function rollDice() {
        setDice((oldDice) => {
            const newDiceArray = [];
            oldDice.forEach((oldDie) => {
                oldDie.isHeld
                    ? newDiceArray.push(oldDie)
                    : newDiceArray.push({
                          ...oldDie,
                          value: Math.ceil(Math.random() * 6),
                      });
            });
            return newDiceArray;
        });
    }

    return (
        <div className="App h-full flex flex-col justify-center">
            <main className="bg-secondary min-h-96 max-w-3xl my-5 mx-auto rounded flex flex-col gap-5 p-5">
                <div>
                    <h1 className="font-bold text-3xl text-center">Tenzies</h1>
                    <p className="text-l text-center text-info">
                        Roll until all dice are the same. Click each die to
                        freeze it at its current value between rolls.
                    </p>
                </div>
                <div className="grid gap-4 grid-cols-5 grid-rows-2">
                    {dice.map((die) => (
                        <Die
                            diceNumber={die.value}
                            isHeld={die.isHeld}
                            setDice={setDice}
                            dieId={die.id}
                            key={die.id}
                        />
                    ))}
                </div>
                <div className="flex justify-center">
                    <button
                        type="button"
                        className="btn w-fit bg-accent border-primary text-white px-10 active:shadow-inner active:shadow-white"
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
