import React from 'react';
import '../themes/aws-colors.css';
import { FaServer, FaDatabase, FaCode } from 'react-icons/fa';

const EC2Node = ({ data, selected }) => {
  return (
    <div 
      style={{
        padding: '15px',
        border: `2px solid var(--aws-ec2-color)`,
        borderRadius: '5px',
        background: selected ? 'var(--aws-ec2-bg)' : 'var(--component-bg)',
        boxShadow: selected ? '0 0 10px var(--aws-ec2-color)' : 'none',
        color: 'var(--text-color)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
      
        <FaServer size={16} style={{ marginLeft: '8px' }} fill="var(--aws-ec2-color)"/>
        <span style={{ marginLeft: '8px', fontWeight: 'bold' }}>{data.label}</span>
      </div>
      <div style={{ marginTop: '10px', fontSize: '12px' }}>
        <div>Type: {data.instanceType}</div>
        <div>SG: {data.securityGroup}</div>
      </div>
    </div>
  );
};

export default EC2Node;