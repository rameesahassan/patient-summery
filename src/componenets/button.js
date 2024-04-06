import React, { useState } from 'react';
import RegistrationComponent from './registration';
import ReferalComponent from './referel';

import AccordianComponent from './Accordian/accordian';
import ToggleButton from './toggle';
import './button.css';

const Button = () => {
    // State to track clicked state of each button
    const [clickedButton, setClickedButton] = useState(null);

    // Function to handle button click
    const handleButtonClick = (buttonName) => {
        setClickedButton(buttonName);
    };

    return (
        <div className="dashboard">
            <button
                type="button"
                className={`btn ${clickedButton === 'IP Consolidated View'}}`}
                onClick={() => handleButtonClick('IP Consolidated View')}
            >
                IP Consolidated View
            </button>

            <button
                type="button"
                className={`btn ${clickedButton === 'Registration'}`}
                onClick={() => handleButtonClick('Registration')}
            >
                Registration
            </button>

            <button
                type="button"
                className={`btn ${clickedButton === 'Referral Details'}`}
                onClick={() => handleButtonClick('Referral Details')}
            >
                Referral Details
            </button>

            {clickedButton === 'IP Consolidated View' && <AccordianComponent />}
            {clickedButton === 'Registration' && <RegistrationComponent />}
            {clickedButton === 'Referral Details' && <ReferalComponent />}
            <ToggleButton />
        </div>
    );
};

export default Button;
