import {useEffect, useState} from 'react';

function App() {
    const [problems, setProblems] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(res => res.json())
            .then(data => setProblems(data));
    }, []);

    return (
        <div style={{padding: '2rem', fontFamily: 'sans-serif'}}>
            <h1>LoopHole - DSA Tracker</h1>
            <ul>
                {problems.map((p) => (
                    <li key={p.id}>{p.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;