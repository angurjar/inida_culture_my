import React, { useState } from 'react';
import Tree from 'react-d3-tree';

const FamilyTree = ({ data }) => {
  const [treeData, setTreeData] = useState(data);

  const nodeSize = { x: 200, y: 100 };
  
  // Define a custom node render function
  const renderCustomNode = ({ nodeDatum, toggleNode }) => (
    <g>
      <rect
        x="-50"
        y="-20"
        width="100"
        height="40"
        stroke="black"
        strokeWidth="1"
        fill="white"
        onClick={toggleNode}
      />
      <text x="-45" y="0">
        {nodeDatum.name}
      </text>
      <text x="-45" y="20" fontSize="12" fill="grey">
        {nodeDatum.dateOfBirth}
      </text>
    </g>
  );

  const handleNodeClick = (node) => {
   
    const updatedNode = prompt('Edit node details (format: Name,DateOfBirth)', `${node.name},${node.dateOfBirth}`);
    if (updatedNode) {
      const [name, dateOfBirth] = updatedNode.split(',');
      const updatedData = { ...node, name, dateOfBirth };
    
      setTreeData(prevData => updateTreeData(prevData, node.id, updatedData));
    }
  };

  const updateTreeData = (data, nodeId, updatedNode) => {
   
    const updateNode = (nodes) => {
      return nodes.map(node => {
        if (node.id === nodeId) {
          return updatedNode;
        }
        if (node.children) {
          return { ...node, children: updateNode(node.children) };
        }
        return node;
      });
    };
    return updateNode(data);
  };

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Tree
        data={treeData}
        nodeSize={nodeSize}
        renderCustomNodeElement={renderCustomNode}
        onNodeClick={handleNodeClick}
      />
    </div>
  );
};

export default FamilyTree;
