import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App w-full h-full">
            <main className="bg-secondary h-96 max-w-3xl my-5 mx-auto rounded" />
        </div>
    );
}

export default App;
