import React from 'react';

function ToggleButton() {
    return (
        <div style={{ marginTop: '560px', position: 'fixed' }}>
            <button
                style={{
                    backgroundColor: '#e63a6c',
                    color: '#fff',
                    borderColor: '#e63a6c',
                    cursor: 'pointer',
                }}
            >
                Toggle Tab
            </button>
        </div>
    );
}
export default ToggleButton;
