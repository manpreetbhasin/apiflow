import React from 'react';
import '../themes/aws-colors.css';

const LambdaNode = ({ data, selected }) => {
  return (
    <div 
      style={{
        padding: '15px',
        border: `2px solid var(--aws-lambda-color)`,
        borderRadius: '5px',
        background: selected ? 'var(--aws-lambda-bg)' : 'var(--component-bg)',
        boxShadow: selected ? '0 0 10px var(--aws-lambda-color)' : 'none',
        color: 'var(--text-color)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <svg width="24" height="24" viewBox="0 0 48 48" fill="var(--aws-lambda-color)">
          <path d="M24 4l-18 8v24l18 8 18-8V12L24 4zm-2 35.17l-12-5.34V17.17l12 5.34v16.66zm2-18.83l-12-5.34 12-5.34 12 5.34-12 5.34zm14 13.49l-12 5.34V22.51l12-5.34v16.66z"/>
        </svg>
        <span style={{ marginLeft: '8px', fontWeight: 'bold' }}>{data.label}</span>
      </div>
      <div style={{ marginTop: '10px', fontSize: '12px' }}>
        <div>Type: {data.instanceType}</div>
        <div>SG: {data.securityGroup}</div>
      </div>
    </div>
  );
};

export default LambdaNode;