// Navbar.js

import React from 'react';

const Navbar = ({
    patientName,
    allergies,
    dob,
    age,
    sex,
    weight,
    height,
    adDate,
    disDate,
    emr,
    ipVisitNo,
    conDr,
    admDr,
}) => {
    const navbarStyle = {
        backgroundColor: '#1E90FF',
        color: 'white',
        padding: '10px',
    };
    const detailStyle = {
        margin: '10px 30px',
        fontSize: '14px',
    };
    return (
        <nav style={navbarStyle}>
            {patientName && (
                <p style={{ margin: '0' }}>
                    <span
                        style={{
                            ...detailStyle,
                            fontSize: '17px',
                            fontFamily: 'sans-serif',
                        }}
                    >
                        Patient Name: {patientName}
                    </span>
                    <span style={detailStyle}>DOB: {dob}</span>
                    <span style={detailStyle}>Sex: {sex}</span>
                    <span style={detailStyle}>Weight: {weight}</span>
                    <span style={detailStyle}>Admission Date: {adDate}</span>
                    <span style={detailStyle}>EMR: {emr}</span>
                    <span style={detailStyle}>Consulting Dr: {conDr}</span>
                </p>
            )}
            {allergies && (
                <p style={{ margin: '0' }}>
                    <span style={{ ...detailStyle, marginLeft: '30px' }}>
                        Allergies: {allergies}
                    </span>
                    <span style={{ ...detailStyle, marginLeft: '95px' }}>
                        Age: {age}
                    </span>
                    <span style={{ ...detailStyle, marginLeft: '170px' }}>
                        Height: {height}
                    </span>
                    <span style={{ ...detailStyle, marginLeft: '25px' }}>
                        Discharge Date: {disDate}
                    </span>
                    <span style={{ ...detailStyle, marginLeft: '180px' }}>
                        IP Visit No: {ipVisitNo}
                    </span>
                    <span style={{ ...detailStyle, marginLeft: '15px' }}>
                        Admitting Dr: {admDr}
                    </span>
                </p>
            )}
        </nav>
    );
};

export default Navbar;
