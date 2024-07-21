import React, { useEffect } from 'react';
import { Handle, useUpdateNodeInternals } from 'reactflow';

export const NodeTemplate = ({
  id,
  name,
  icon,
  handles = [],
  style,
  children,
}) => {
  const updateNodeInternals = useUpdateNodeInternals();

  useEffect(() => {
    updateNodeInternals(id);
  }, [handles, id, updateNodeInternals]);

  return (
    <div
      style={{
        width: 230,
        height: 'fit-content',
        border: '1px solid black',
        borderRadius: '8px',
        ...style,
        // padding: '5px 20px 20px 20px',
      }}
    >
      {handles.map((handle, index) => (
        <div key={`${id}-${index}`}>
          <Handle
            type={handle.type}
            position={handle.position}
            id={handle.id}
            style={{ backgroundColor: '#ce94e8', ...handle.style }}
            name={handle.name}
          />
          {handle.name && (
            <div
              style={{
                position: 'absolute',
                top: `${parseFloat(handle.style.top) - 15}px`,
                left: '-50px',
                color: 'pink',
              }}
            >
              {handle.name}
            </div>
          )}
        </div>
      ))}
      <div
        style={{
          borderBottom: '1px black solid',
          padding: '5px',
          fontSize: '14px',
          fontWeight: '700',
        }}
      >
        <div style={{ display: 'flex', gap: '5px' }}>
          {icon}
          {name}
        </div>
      </div>
      <div style={{ padding: '15px 10px 10px 10px' }}>{children}</div>
    </div>
  );
};
