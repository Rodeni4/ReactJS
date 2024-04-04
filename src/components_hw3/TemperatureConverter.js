import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import "../styles/TemperatureConverter.css";

function TemperatureConverter() {

    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');
    
    const celsiusChange = (event) => {
        const value = event.target.value;
        setCelsius(value);
        setFahrenheit((value * 9 / 5) + 32);
    }

    const fahrenheitChange = (event) => {
        const value = event.target.value;
        setCelsius((value - 32) * 5 / 9);
        setFahrenheit(value);
    }

    return (
        <div>
            <h3>Температурный конвертер</h3>
            <div className="field-container">
                <label className="label">Температура Цельсия</label>
                <TextField type="number" value={celsius} onChange={celsiusChange}></TextField>
            </div>
            <div className="field-container">
                <label className="label">Температура Фаренгейта</label>
                <TextField type="number" value={fahrenheit} onChange={fahrenheitChange}></TextField>
            </div>
        </div>
    );
}

export default TemperatureConverter;