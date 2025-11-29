import React, { useState, useEffect } from "react";
import useSimulation from "./Simulation";
import CanvasWrapper from "./CanvasWrapper";
import Chart from "./Chart";
import './App.css'

const App = () => {
  const [step, setStep] = useState(0);
  const nodes = useSimulation(200, 100, 1400, 600, step);
  const [history, setHistory] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => s + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (nodes.length > 0) {
      const trueNodes = nodes.filter(n => n.nextMove).length;
      setHistory(h => [...h, trueNodes]);
    }
  }, [step]);

  return (
    <>
      <h1>Game Theory with Networks</h1>
      <p>Step: {step}</p>
      <CanvasWrapper nodes={nodes} step={step}/>
      <div style={{marginTop: '20px'}}>
        <h2>Proportion of Co-operators</h2>
        <Chart data={history} />
      </div>
    </>
  )
}

export default App
