import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [manualTesting, setManualTesting] = useState(50);
    const [automationTesting, setAutomationTesting] = useState(50);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log({ name, email });
    };

    const handleSliderChange = (e) => {
        const newValue = parseInt(e.target.value);
        const difference = Math.abs(newValue - manualTesting);
    
        if (difference <= 10) {
          setManualTesting(newValue);
          setAutomationTesting(100 - newValue);
        }
      };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>Manual Testing: {manualTesting}%</label>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={manualTesting}
                    onChange={handleSliderChange}
                />
                <label>Automation Testing: {automationTesting}%</label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default HomePage;
