import React from 'react';

export default function PropertiesPanel({ 
  isVisible, 
  selectedNode, 
  onClose,
  onUpdateNode 
}) {
  if (!isVisible || !selectedNode) return null;

  return (
    <div className="properties-panel">
      <h3>{selectedNode.type.toUpperCase()} Properties</h3>
      <button onClick={onClose}>Close</button>
      
      <div className="form-group">
        <label>Label</label>
        <input
          type="text"
          value={selectedNode.data.label || ''}
          onChange={(e) => onUpdateNode(selectedNode.id, {
            label: e.target.value
          })}
        />
      </div>
      
      {selectedNode.type === 'ec2' && (
        <>
          <div className="form-group">
            <label>Instance Type</label>
            <select
              value={selectedNode.data.instanceType || 't2.micro'}
              onChange={(e) => onUpdateNode(selectedNode.id, {
                instanceType: e.target.value
              })}
            >
              <option value="t2.micro">t2.micro</option>
              <option value="t3.large">t3.large</option>
              <option value="m5.large">m5.large</option>
            </select>
          </div>
          
          <div className="form-group theme-aware">
            <label className="form-label">Security Group</label>
            <input
              className="form-input"
              type="text"
              value={selectedNode.data.securityGroup || ''}
              onChange={(e) => onUpdateNode(selectedNode.id, {
                securityGroup: e.target.value
              })}
            />
          </div>
          
          <div className="form-group theme-aware">
            <label className="form-label">Credentials</label>
            <input
              className="form-input"
              type="text"
              value={selectedNode.data.credentials || ''}
              onChange={(e) => onUpdateNode(selectedNode.id, {
                credentials: e.target.value
              })}
            />
          </div>
        </>
      )}
    </div>
  );
}