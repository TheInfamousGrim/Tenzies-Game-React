import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

// Css
import './App.css';

// Components
import Die from './Components/Die';
import Footer from './Components/Footer';
import { Navigation } from './Components/Navigation/Navigation';
import Modal from './Components/Modal';

function App() {
    // State
    const [dice, setDice] = useState(allNewDice());
    const [tenzies, setTenzies] = useState(false);
    const [rolling, setRolling] = useState(false);
    const [numberOfRolls, setNumberOfRolls] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);

    // Modal open and close function
    const open = () => setModalOpen(true);
    const close = () => setModalOpen(false);

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
        if (checkTenzies) {
            open();
            setTenzies(true);
        }
    }, [dice]);

    // Roll all the dice that aren't currently being held
    function rollDice() {
        if (!tenzies) {
            // Set the state of the application to rolling
            setRolling(true);
            // Add 1 to the number of rolls
            setNumberOfRolls((prevRolls) => prevRolls + 1);
            // Roll the dice that aren't held
            setDice((oldDice) =>
                oldDice.map((oldDie) =>
                    oldDie.isHeld
                        ? oldDie
                        : {
                              ...oldDie,
                              value: Math.ceil(Math.random() * 6),
                          }
                )
            );
            // Shake the dice for 1 second
            setTimeout(() => {
                setRolling(false);
            }, 1000);
        } else {
            // Close the modal
            close();

            // Reset the game
            setTenzies(false);

            // Get new dice
            setDice(allNewDice());
        }
    }

    return (
        <div className="App h-full flex flex-col justify-between">
            {modalOpen && (
                <Modal
                    modalOpen={modalOpen}
                    close={close}
                    setModalOpen={setModalOpen}
                    numberOfRolls={numberOfRolls}
                    rollDice={rollDice}
                />
            )}
            <Navigation />
            {tenzies && <Confetti />}
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
                            isRolling={rolling}
                            key={die.id}
                        />
                    ))}
                </div>
                <div className="flex justify-center">
                    <button
                        type="button"
                        className="btn w-fit bg-accent border-primary text-white px-10 active:shadow-inner active:shadow-white"
                        onClick={() => {
                            if (!rolling) return rollDice();
                        }}
                    >
                        {tenzies ? 'New Game' : 'Roll'}
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
