import React, { useState, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ReactFlowProvider, useNodesState } from 'reactflow';
import Sidebar from './components/Sidebar';
import FlowComponent from './components/FlowComponent';
import PropertiesPanel from './components/PropertiesPanel';

import './styles.css';
import './themes/theme-light.css';
import './themes/theme-dark.css';

function App() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [showProperties, setShowProperties] = useState(false);
  const [nodes, setNodes] = useNodesState([]);

  const onNodeClick = useCallback((_, node) => {
    setSelectedNode(node);
    setShowProperties(true);
  }, []);

  const onPaneClick = useCallback(() => {
    setShowProperties(false);
    setSelectedNode(null);
  }, []);

  const onDrop = useCallback((event) => {
    event.preventDefault();
    const reactFlowBounds = document.querySelector('.flow-container').getBoundingClientRect();
    const type = event.dataTransfer.getData('aws-component');
    
    if (!type) return;

    const position = {
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top
    };

    const newNode = {
      id: `${type}-${Date.now()}`,
      type,
      position,
      data: { label: type.toUpperCase() }
    };

    setNodes((nds) => nds.concat(newNode));
  }, [setNodes]);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
   
        <div className="editor-container">
          
          <Sidebar />
          <ReactFlowProvider>
          <div className="flow-container">
            <FlowComponent 
              onNodeClick={onNodeClick}
              onPaneClick={onPaneClick}
              onDrop={onDrop}
              onDragOver={onDragOver}
              nodes={nodes}
              setNodes={setNodes}
            />
          </div>
        </ReactFlowProvider>

        <PropertiesPanel 
          isVisible={showProperties}
          selectedNode={selectedNode}
          onClose={() => setShowProperties(false)}
        />
      </div>
    </DndProvider>
  );
}

export default App;