import { useState, useEffect } from "react";

const useSimulation = (numNodes = 50, linkDistance = 50) => {
  const [nodes, setNodes] = useState([]);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const newNodes = Array.from({ length: numNodes }, (_, i) => ({
      id: i,
      x: Math.random() * 1200, // TODO fix magic numbers
      y: Math.random() * 500,
    }));

    const newLinks = [];
    for (let i = 0; i < numNodes; i++) {
      for (let j = i + 1; j < numNodes; j++) {
        const dx = newNodes[i].x - newNodes[j].x;
        const dy = newNodes[i].y - newNodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < linkDistance) newLinks.push({ source: i, target: j });
      }
    }

    setNodes(newNodes);
    setLinks(newLinks);
  }, [numNodes, linkDistance]);

  return { nodes, links };
}

export default useSimulation;
