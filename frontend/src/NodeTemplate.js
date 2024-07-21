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

  //Measuring text width

  return (
    <div
      style={{
        border: '1px solid black',
        padding: '3px',
        borderRadius: '8px',
        // backgroundColor: 'rgba(29, 23, 74, 1)',
        background:
          'linear-gradient(222deg, rgba(51,36,89,1) 0%, rgba(89,64,135,1) 35%, rgba(211,160,254,1) 100%)',
      }}
    >
      <div
        style={{
          width: 230,
          height: 'fit-content',
          border: '1px solid black',
          borderRadius: '8px',
          backgroundColor: 'white',
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
              style={{
                width: '8px',
                height: '8px',
                backgroundColor:
                  handle.position === 'left'
                    ? 'rgba(60, 21, 115, 1)'
                    : '#ce94e8',
                ...handle.style,
              }}
              name={handle.name}
            />
            {handle.name && (
              <div
                style={{
                  position: 'absolute',
                  top: `${parseFloat(handle.style.top) - 15}px`,
                  left: `-${handle.name.length * 7}px`,
                  color: 'rgba(60, 21, 115, 1)',
                  fontSize: '12px',
                }}
              >
                {handle.name}
              </div>
            )}
          </div>
        ))}
        <div
          style={{
            borderBottom: '0.5px rgba(60, 21, 115, 1) solid',
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
    </div>
  );
};
