import React, { useState, useEffect, useMemo } from 'react';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

// Css
import './App.css';

// Components
import Die from './Components/Die';
import Footer from './Components/Footer';
import { Navigation } from './Components/Navigation/Navigation';
import Modal from './Components/Modal';

// Dayjs plugins
dayjs.extend(duration);

function App() {
    // State
    const [dice, setDice] = useState(allNewDice());
    const [tenzies, setTenzies] = useState(false);
    const [rolling, setRolling] = useState(false);
    const [numberOfRolls, setNumberOfRolls] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [startTime, setStartTime] = useState(dayjs());
    const [endTime, setEndTime] = useState({});
    const [timestamp, setTimeStamp] = useState({});

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

    // Create a timer that will measure how long it takes the user to get a Tenzie
    // useMemo(() => {
    // }, [timestamp]);

    // Check if the user has won the game
    useEffect(() => {
        // Returns true if every die isHeld and is equal
        const checkTenzies = dice.every(
            (die) => die.isHeld && die.value === dice[0].value
        );
        if (checkTenzies) {
            // Get the final time
            const finalTime = timestamp;
            setEndTime(finalTime);
            open();
            setTenzies(true);
        } else {
            // Creating a second long interval
            const interval = 1000;

            // Get the difference between the start time and the end time in unix time
            const diffTime = dayjs().unix() - startTime.unix();

            // Setup the initial duration
            let tenzieDuration = dayjs.duration(
                diffTime * 1000,
                'milliseconds'
            );

            // Update every second
            const intervalId = setInterval(() => {
                tenzieDuration = dayjs.duration(
                    tenzieDuration.asMilliseconds() + interval,
                    'milliseconds'
                );
                setTimeStamp(tenzieDuration);
            }, interval);
            return () => clearInterval(intervalId);
        }
    }, [dice, timestamp]);

    // Roll all the dice that aren't currently being held
    function rollDice() {
        if (numberOfRolls === 0) {
            setStartTime(dayjs());
        }
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
            // Reset the game
            setTenzies(false);

            // Get new dice
            setDice(allNewDice());

            // Reset the timer
            setStartTime(dayjs());
            setEndTime(dayjs());
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
                    timestamp={timestamp}
                    tenzies={tenzies}
                    endTime={endTime}
                    rollDice={rollDice}
                />
            )}
            <Navigation
                numberOfRolls={numberOfRolls}
                timestamp={timestamp}
                tenzies={tenzies}
                endTime={endTime}
            />
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
