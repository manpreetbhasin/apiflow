import React from 'react';
import './styles.css';
import { IoClose } from 'react-icons/io5';

const PropertiesPanel = ({ isVisible, selectedNode, onUpdateNode, onClose }) => {
  if (!selectedNode) return null;

  return (
    <div className={`properties-panel ${isVisible ? 'visible' : ''}`}>
      <div className="panel-header">
        <h3>{selectedNode.type.toUpperCase()} Properties</h3>
        <button className="close-button" onClick={onClose}>
          <IoClose size={24} />
        </button>
      </div>
      
      <div className="form-group">
        <label>Label</label>
        <input
          className="theme-input"
          value={selectedNode.data.label}
          onChange={(e) => onUpdateNode(selectedNode.id, { 
            label: e.target.value 
          })}
        />

      {selectedNode.type === 'ec2' && (
        <>
          <div className="form-group">
            <label>Instance Type</label>
            <select
              value={selectedNode.data.instanceType}
              onChange={(e) => onUpdateNode(selectedNode.id, { 
                instanceType: e.target.value 
              })}
            >
              <option value="t2.micro">t2.micro</option>
              <option value="t3.large">t3.large</option>
            </select>
          </div>
        </>
      )}

      {selectedNode.type === 's3' && (
        <div className="form-group">
          <label>Storage Class</label>
          <select
            value={selectedNode.data.storageClass}
            onChange={(e) => onUpdateNode(selectedNode.id, { 
              storageClass: e.target.value 
            })}
          >
            <option value="STANDARD">Standard</option>
            <option value="STANDARD_IA">Standard-IA</option>
          </select>
        </div>
      )}
    </div>
    </div>
  );
};
export default PropertiesPanel;