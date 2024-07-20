import React, { useEffect } from 'react';
import { Handle, Position, useUpdateNodeInternals } from 'reactflow';

export const NodeTemplate = ({ id, name, handles = [], children }) => {
  const updateNodeInternals = useUpdateNodeInternals();

  useEffect(() => {
    updateNodeInternals(id);
  }, [handles, id, updateNodeInternals]);

  return (
    <div
      style={{
        width: 200,
        height: 'fit-content',
        border: '1px solid black',
        padding: '20px',
      }}
    >
      {handles.map((handle, index) => (
        <div key={`${id}-${index}`}>
          <Handle
            type={handle.type}
            position={handle.position}
            id={handle.id}
            style={handle.style}
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
      <div>
        <span>{name}</span>
      </div>
      <div>{children}</div>
    </div>
  );
};
