import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

function App() {
    const [patients, setPatients] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    useEffect(() => {
        fetchPatients();
    }, []);

    const fetchPatients = async () => {
        const response = await axios.get('http://localhost:5000/api/patients');
        setPatients(response.data);
    };

    const addPatient = async () => {
        const response = await axios.post('http://localhost:5000/api/patients', {
            name,
            age,
            gender
        });
        setPatients([...patients, response.data]);
        setName('');
        setAge('');
        setGender('');
    };

    return (
        <div className="App">
            <h1>Hospital Management System</h1>
            <div>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                />
                <button onClick={addPatient}>Add Patient</button>
            </div>
            <ul>
                {patients.map((patient) => (
                    <li key={patient.id}>
                        {patient.name} - {patient.age} - {patient.gender}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;