import React, { useCallback, useEffect } from 'react';
import ReactFlow, { 
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  useReactFlow,
  ReactFlowProvider
} from 'reactflow';
import 'reactflow/dist/style.css';
import '../themes/react-flow.css';
import { EC2Node, S3Node, LambdaNode } from '../awsnodes';
import { getDefaultNodeData } from '../utils/nodeHelpers';

// Move nodeTypes outside the component to prevent recreation on each render
const nodeTypes = {
  ec2: EC2Node,
  s3: S3Node,
  lambda: LambdaNode
};

export default function FlowComponent({ 
  onNodeClick, 
  onPaneClick,
  onDrop,
  onDragOver 
}) {
  const [nodes, setNodes, onNodesChange] = useNodesState([
    {
      id: 'default-ec2',
      type: 'ec2',
      position: { x: 100, y: 100 },
      data: getDefaultNodeData('ec2')
    }
  ]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition, setViewport, getViewport } = useReactFlow();

  // Initialize viewport
  useEffect(() => {
    const savedViewport = localStorage.getItem('aws-diagram-viewport');
    if (savedViewport) {
      setViewport(JSON.parse(savedViewport));
    } else {
      setViewport({ x: 0, y: 0, zoom: 1 });
    }
  }, []);

  // Save viewport on change
  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem('aws-diagram-viewport', JSON.stringify(getViewport()));
    }, 200);
    return () => clearTimeout(timer);
  }, [getViewport]);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        onPaneClick={onPaneClick}
        onDrop={onDrop}
        onDragOver={onDragOver}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls position="bottom-left" />
      </ReactFlow>
    </div>
  );
}