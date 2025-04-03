import React from 'react';
import '../themes/aws-colors.css';

const S3Node = ({ data, selected }) => {
  return (
    <div 
      style={{
        padding: '15px',
        border: `2px solid var(--aws-s3-color)`,
        borderRadius: '5px',
        background: selected ? 'var(--aws-s3-bg)' : 'var(--component-bg)',
        boxShadow: selected ? '0 0 10px var(--aws-s3-color)' : 'none',
        color: 'var(--text-color)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <svg width="24" height="24" viewBox="0 0 48 48" fill="var(--aws-s3-color)">
          <path d="M24 4L6 12v24l18 8 18-8V12L24 4zm0 4.6l12 5.4v20l-12 5.4-12-5.4V14l12-5.4z"/>
          <path d="M24 21.6l-6-2.7v5.4l6 2.7 6-2.7v-5.4l-6 2.7z"/>
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

export default S3Node;