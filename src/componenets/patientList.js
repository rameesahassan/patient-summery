// PatientList.js

import React, { useState, useEffect } from 'react';
import Navbar from './navbar';

const PatientList = ({ patients }) => {
    const [patientDetails, setPatientDetails] = useState(null);

    useEffect(() => {
        fetch(
            'https://69f6fa24-f608-418f-988d-6baaa1f22b17.mock.pstmn.io/patientdetails'
        )
            .then((response) => response.json())
            .then((details) => setPatientDetails(details));
    }, []);

    return (
        <div>
            {patientDetails && (
                <Navbar
                    patientName={patientDetails.patientName}
                    allergies={patientDetails.allergies}
                    dob={patientDetails.DOB}
                    age={patientDetails.age}
                    sex={patientDetails.sex}
                    height={patientDetails.height}
                    weight={patientDetails.weight}
                    adDate={patientDetails.admissionDate}
                    disDate={patientDetails.dischargeDate}
                    emr={patientDetails.EMR}
                    ipVisitNo={patientDetails.IPVisitNo}
                    conDr={patientDetails.consultingDr}
                    admDr={patientDetails.admittingDr}
                />
            )}
        </div>
    );
};

export default PatientList;
