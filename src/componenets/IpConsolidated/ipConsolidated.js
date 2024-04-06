import React from 'react';
import './ipConsolidated.css';

function IpConsolidatedComponent() {
    return (
        <div>
            <div className="select">
                <select
                    className="form-select form-select-sm "
                    aria-label="Default select example"
                >
                    <option className="option-select">
                        Active Mediation (4)
                    </option>
                    <option className="option-select" value="1">
                        MAGNA SB 1.5GM IV-CEFOPERAZONE + SULBACTAM
                    </option>
                    <option className="option-select" value="2">
                        PANTOP 40GM INJ-PANTOPRAZOLE
                    </option>
                    <option className="option-select" value="3">
                        Vizylac cap-PYRIDOXINE + NICOTINAMIDE + RIBOFLAVIN +
                    </option>
                    <option className="option-select" value="4">
                        LACTO BACILLUS SPOREGENS + FOLIC ACID (VIT B9) +
                        THIAMINE + D
                    </option>
                    <option className="option-select" value="5">
                        LIBRAX TAB-CHLORDIAZEPOXIDE + CLIDINIUM BROMIDE
                    </option>
                </select>
                <select
                    className="form-select form-select-sm "
                    aria-label="Default select example"
                >
                    <option className="option-select">
                        Problems & Diagnosis (3)
                    </option>
                    <option className="option-select" value="1">
                        J32.0 CHRONIC MAXILLARY SINUSITIS (P)
                    </option>
                    <option className="option-select" value="2">
                        J34.3 HYPERTROPHY OF NASAL TURBINATES
                    </option>
                    <option className="option-select" value="3">
                        J34.2 DEVIATED NASAL SEPTUM
                    </option>
                </select>
                <select
                    className="form-select form-select-sm "
                    aria-label="Default select example"
                >
                    <option className="option-select">Vital Signs (15)</option>
                    <option className="option-select" value="1">
                        21-02-2024 14:00:00 101.2F 117P 130/70 BP 22RR 90 SPO2
                    </option>
                    <option className="option-select" value="2">
                        21-02-2024 18:00:00 100.6F 128P 130/70 BP 22RR 90 SPO2
                    </option>
                    <option className="option-select" value="3">
                        21-02-2024 21:20:00 101.2F 117P 130/70 BP 22RR 90 SPO2
                    </option>
                    <option className="option-select" value="4">
                        21-02-2024 21:45:00 101.2F 117P 130/70 BP 22RR 90 SPO2
                    </option>
                </select>
                <select
                    className="form-select form-select-sm "
                    aria-label="Default select example"
                >
                    <option className="option-select">Documents (1)</option>
                    <option className="option-select" value="1">
                        FACE SHEET
                    </option>
                    <option className="option-select" value="2">
                        Investigation whole abdomen
                    </option>
                    <option className="option-select" value="3">
                        Referral Form
                    </option>
                </select>
                <select
                    className="form-select form-select-sm "
                    aria-label="Default select example"
                >
                    <option className="option-select">Lab Results (1)</option>
                    <option className="option-select" value="1">
                        PSA 2.35 19-02-2024 02:05:05 PM
                    </option>
                    <option className="option-select" value="2">
                        FBS 114mg/dl 21-02-2024 05:00:00 AM
                    </option>
                </select>
                <select
                    className="form-select form-select-sm "
                    aria-label="Default select example"
                >
                    <option className="option-select">
                        Radiology Results (0)
                    </option>
                    <option className="option-select" value="1">
                        Lorem ipsum dolor sit amet
                    </option>
                </select>
            </div>
        </div>
    );
}

export default IpConsolidatedComponent;
