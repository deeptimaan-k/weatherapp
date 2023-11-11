import React, { useState } from 'react';

const WaterQualityIndexCalculator = () => {
  const [temperature, setTemperature] = useState('');
  const [bod, setBod] = useState('');
  const [tss, setTss] = useState('');
  const [dissolvedOxygen, setDissolvedOxygen] = useState('');
  const [conductivity, setConductivity] = useState('');
  const [waterQualityIndex, setWaterQualityIndex] = useState(null);

  const calculateWaterQualityIndex = () => {
    const ITEMP = 1 - (Math.min(temperature - 20, 0) / 10);
    const IBOD = bod <= 12 ? (30 - bod) / 12 : 0;
    const ITSS = tss <= 250 ? (25 - (tss / 10)) : 0;
    const IDO = dissolvedOxygen > 10 ? 25 : 0;
    const ICOND = conductivity <= 4000 ? (20 - (conductivity / 200)) : 0;

    const isqa = ITEMP * (IBOD + ITSS + IDO + ICOND);
    setWaterQualityIndex(isqa.toFixed(2));
  };

  return (
    <div>
      <h1>Water Quality Index Calculator</h1>
      <div>
        <label>Temperature (°C):</label>
        <input type="number" value={temperature} onChange={(e) => setTemperature(e.target.value)} />
      </div>
      <div>
        <label>Biological Oxygen Demand (BOD) (mg/L):</label>
        <input type="number" value={bod} onChange={(e) => setBod(e.target.value)} />
      </div>
      <div>
        <label>Total Suspended Solids (TSS) (mg/L):</label>
        <input type="number" value={tss} onChange={(e) => setTss(e.target.value)} />
      </div>
      <div>
        <label>Dissolved Oxygen (DO) (mg/L):</label>
        <input type="number" value={dissolvedOxygen} onChange={(e) => setDissolvedOxygen(e.target.value)} />
      </div>
      <div>
        <label>Conductivity (μS/cm):</label>
        <input type="number" value={conductivity} onChange={(e) => setConductivity(e.target.value)} />
      </div>
      <button onClick={calculateWaterQualityIndex}>Calculate</button>
      {waterQualityIndex && (
        <div>
          <h2>Water Quality Index (ISQA): {waterQualityIndex}</h2>
        </div>
      )}
    </div>
  );
};

export default WaterQualityIndexCalculator;
