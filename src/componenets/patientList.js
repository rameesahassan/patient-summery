// PatientList.js

import React from 'react';
import Navbar from './navbar';

const PatientList = ({ patients }) => {
    // For demonstration, assuming the patient details are known
    const patientName = 'JINJU JOSEPH';
    const allergies = 'Bactrim, Penicillin';
    const dob = ' 27/07/1987';
    const age = '37 years';
    const sex = 'Male';
    const weight = '68kg';
    const height = '177cm';
    const adDate = '19-03-2024 17:16:55 PM';
    const disDate = '';
    const emr = '64000014';
    const ipVisitNo = 'IP/165';
    const conDr = 'MOHAMMED QURESHI';
    const admDr = 'MOHAMMED QURESHI';

    return (
        <div>
            <Navbar
                patientName={patientName}
                allergies={allergies}
                dob={dob}
                age={age}
                sex={sex}
                height={height}
                weight={weight}
                adDate={adDate}
                disDate={disDate}
                emr={emr}
                ipVisitNo={ipVisitNo}
                conDr={conDr}
                admDr={admDr}
            />
        </div>
    );
};

export default PatientList;
