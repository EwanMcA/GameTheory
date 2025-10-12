import React, { useState, useEffect } from "react";
import useSimulation from "./Simulation";
import CanvasWrapper from "./CanvasWrapper";
import './App.css'

const App = () => {
  const [step, setStep] = useState(0);
  const nodes = useSimulation(100, 100, step);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => s + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [step]);

  return (
    <>
      <h1>Game Theory with Networks</h1>
      <p>Step: {step}</p>
      <CanvasWrapper nodes={nodes} step={step}/>
    </>
  )
}

export default App
