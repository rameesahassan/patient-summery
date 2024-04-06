import React, { useState, useEffect } from 'react';
import './accordian.css';
import ToggleButton from '../toggle';

function AccordianComponent() {
    const [patientMedication, setPatientMedication] = useState(null);
    const [diagnosis, setDiagnosis] = useState(null);
    const [vitalSigns, setVitalSigns] = useState(null);
    const [documentList, setDocumentList] = useState(null);
    const [labresult, setLabResult] = useState(null);
    const [progressNote, setProgressNote] = useState(null);
    const [nurseNote, setNurseNote] = useState(null);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        // Fetch patient medicines
        fetch(
            'https://69f6fa24-f608-418f-988d-6baaa1f22b17.mock.pstmn.io/Medication'
        )
            .then((response) => response.json())
            .then((data) => setPatientMedication(data))
            .catch((error) =>
                console.error('Error fetching patient medicines:', error)
            );

        // Fetch diagnosis
        fetch(
            'https://69f6fa24-f608-418f-988d-6baaa1f22b17.mock.pstmn.io/Diagnosis'
        )
            .then((response) => response.json())
            .then((data) => setDiagnosis(data))
            .catch((error) =>
                console.error('Error fetching diagnosis:', error)
            );

        // Fetch vital signs
        fetch(
            'https://69f6fa24-f608-418f-988d-6baaa1f22b17.mock.pstmn.io/VitalSigns'
        )
            .then((response) => response.json())
            .then((data) => setVitalSigns(data))
            .catch((error) =>
                console.error('Error fetching vital signs:', error)
            );
        // Fetch document List
        fetch(
            'https://69f6fa24-f608-418f-988d-6baaa1f22b17.mock.pstmn.io/DocumentList'
        )
            .then((response) => response.json())
            .then((data) => setDocumentList(data))
            .catch((error) =>
                console.error('Error fetching document list:', error)
            );
        // Fetch Lab Result
        fetch(
            'https://69f6fa24-f608-418f-988d-6baaa1f22b17.mock.pstmn.io/Labresult'
        )
            .then((response) => response.json())
            .then((data) => setLabResult(data))
            .catch((error) =>
                console.error('Error fetching lab result', error)
            );
        // Fetch progress note
        fetch(
            'https://69f6fa24-f608-418f-988d-6baaa1f22b17.mock.pstmn.io/ProgressNote'
        )
            .then((response) => response.json())
            .then((data) => setProgressNote(data))
            .catch((error) =>
                console.error('Error fetching progress note:', error)
            );
        // Fetch nurse note
        fetch(
            'https://69f6fa24-f608-418f-988d-6baaa1f22b17.mock.pstmn.io/NurseNote'
        )
            .then((response) => response.json())
            .then((data) => setNurseNote(data))
            .catch((error) =>
                console.error('Error fetching nurse note:', error)
            );
    }, []);

    const data = [
        {
            heading: 'Active Medication',
            details: patientMedication
                ? patientMedication.map((medicine, index) => (
                      <React.Fragment key={index}>
                          {medicine.medicineName}
                          <br />
                      </React.Fragment>
                  ))
                : 'Loading...',
        },
        {
            heading: 'Diagnosis',
            details: diagnosis
                ? diagnosis.map((item, index) => (
                      <React.Fragment key={index}>
                          {item.diagnosis}
                          <br />
                      </React.Fragment>
                  ))
                : 'Loading...',
        },
        {
            heading: 'Vital Signs',
            details: vitalSigns
                ? vitalSigns.map((item, index) => (
                      <React.Fragment key={index}>
                          {item.datetime}
                          <br />
                      </React.Fragment>
                  ))
                : 'Loading...',
        },
        {
            heading: 'Documents ',
            details: documentList
                ? documentList.map((item, index) => (
                      <React.Fragment key={index}>
                          {item.Name}
                          <br />
                      </React.Fragment>
                  ))
                : 'Loading...',
        },
        {
            heading: 'Lab Results ',
            details: labresult
                ? labresult.map((item, index) => (
                      <React.Fragment key={index}>
                          {item.test}: {item.result}:{item.datetime}
                          <br />
                      </React.Fragment>
                  ))
                : 'Loading...',
        },
        {
            heading: 'Progress Note ',
            details: progressNote
                ? progressNote.map((item, index) => (
                      <React.Fragment key={index}>
                          {item.datetime}: {item.note}
                          <br />
                      </React.Fragment>
                  ))
                : 'Loading...',
        },
        {
            heading: 'Nurses Note ',
            details: nurseNote
                ? nurseNote.map((item, index) => (
                      <React.Fragment key={index}>
                          {item.datetime}: {item.note}
                          <br />
                      </React.Fragment>
                  ))
                : 'Loading...',
        },
    ];

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
    };

    return (
        <div className="wrapper">
            <div className="accordian">
                {data.map((item, i) => (
                    <div className="item">
                        <div className="title" onClick={() => toggle(i)}>
                            <h2>{item.heading}</h2>
                            <span>{selected === i ? '-' : '+'}</span>
                        </div>
                        <div
                            className={
                                selected === i ? 'document show' : 'document'
                            }
                        >
                            {item.details}
                        </div>
                    </div>
                ))}
            </div>

            <ToggleButton />
        </div>
    );
}
export default AccordianComponent;
