import React from 'react';
import styled from 'styled-components';
import '../switch';

const Switch = ({ isOn, handleToggle,   onSwitchClick = ()=>{} }) => {
    return (
        <div >
            <input onClick={onSwitchClick}
                checked={isOn}
                onChange={handleToggle}
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
            style={{background: isOn && "#7B9582"}}
                className="react-switch-label"
                htmlFor={`react-switch-new`}
            >
                <span className={`react-switch-button`} />
            </label>
        </div>
    );
};

export default Switch;