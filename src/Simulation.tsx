import { useState, useEffect } from "react";

const useSimulation = (numNodes = 50, linkDistance = 50, step = 0) => {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    const newNodes = Array.from({ length: numNodes }, (_, i) => ({
      id: i,
      x: Math.random() * 1200, // TODO fix magic numbers
      y: Math.random() * 500,
      nextMove: Math.random() < 0.5,
      links: [],
    }));

    for (let i = 0; i < numNodes; i++) {
      for (let j = i + 1; j < numNodes; j++) {
        const dx = newNodes[i].x - newNodes[j].x;
        const dy = newNodes[i].y - newNodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < linkDistance) {
          newNodes[i].links.push(j);
          newNodes[j].links.push(i);
        }
      }
    }

    setNodes(newNodes);
  }, [numNodes, linkDistance]);

  useEffect(() => {
    const nextNodes = [...nodes];
    if (nodes.length === 0) return;

    const played = new Set();
    for (let i = 0; i < numNodes; i++) {
      const node = nodes[i];
      if (!node || played.has(node.id) || node.links.length === 0) {
        continue;
      }

      const b = nodes[node.links[Math.floor(Math.random() * node.links.length)]];
      played.add(node.id);
      played.add(b.id);

      const newNode = { ...node };
      const newB = { ...b };
      if (node.nextMove) {
        newB.nextMove = true;
      } else {
        newB.nextMove = false;
      }

      if (b.nextMove) {
        newNode.nextMove = true;
      } else {
        newNode.nextMove = false;
      }

      nextNodes[node.id] = newNode;
      nextNodes[b.id] = newB;
    };

    setNodes(nextNodes);
  }, [step]);

  return nodes;
}

export default useSimulation;
