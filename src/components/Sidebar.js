import React from 'react';
import { useDrag } from 'react-dnd';
import { FaServer, FaDatabase, FaCode } from 'react-icons/fa';
import ThemeSelector from './ThemeSelector';
import '../themes/aws-colors.css';

const AWS_COMPONENTS = [
  { type: 'ec2', icon: <FaServer size={24} />, label: 'EC2', default: true },
  { type: 's3', icon: <FaDatabase size={24} />, label: 'S3', default: true },
  { type: 'lambda', icon: <FaCode size={24} />, label: 'Lambda' }
];

// Individual component item that can use hooks properly
const ComponentItem = ({ component }) => {
  const getIconColor = (type) => {
    switch(type) {
      case 'ec2': return 'var(--aws-ec2-color)';
      case 's3': return 'var(--aws-s3-color)';
      case 'lambda': return 'var(--aws-lambda-color)';
      default: return 'currentColor';
    }
  };
  
  // Now the hook is called at the top level of a component
  const [, drag] = useDrag(() => ({
    type: 'aws-component',
    item: { type: component.type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    }),
    canDrag: component.default
  }));
  
  return (
    <div 
      key={component.type}
      ref={component.default ? drag : null}
      className={`component-item ${!component.default ? 'disabled' : ''}`}
      data-type={component.type}
    >
      <div style={{ color: getIconColor(component.type) }}>
        {component.icon}
      </div>
      <span style={{ color: 'var(--text-color)' }}>{component.label}</span>
    </div>
  );
};

const ComponentSelector = () => {
  return (
    <div className="component-selector">
      <h3>AWS Components</h3>
      <div className="component-grid">
        {AWS_COMPONENTS.map((comp) => (
          <ComponentItem key={comp.type} component={comp} />
        ))}
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="selector-panel">
      <ComponentSelector />
      <div className="theme-selector-container">
        <ThemeSelector />
      </div>
    </div>
  );
};

export default Sidebar;