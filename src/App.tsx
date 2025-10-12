import useSimulation from "./Simulation";
import CanvasWrapper from "./CanvasWrapper";
import './App.css'

const App = () => {
  const { nodes, links } = useSimulation(100, 100);

  return (
    <>
      <h1>Game Theory with Networks</h1>
      <CanvasWrapper nodes={nodes} links={links} />
    </>
  )
}

export default App
