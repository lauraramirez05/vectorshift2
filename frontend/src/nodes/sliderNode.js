import React, { useState } from 'react';
import { Position } from 'reactflow';
import { NodeTemplate } from '../NodeTemplate';
import { FormField } from '../FormField';
import { CiSliderHorizontal } from 'react-icons/ci';

export const SliderNode = ({ id, data }) => {
  const [brightness, setBrightness] = useState(data?.brightness || 50);
  const [contrast, setContrast] = useState(data?.contrast || 50);

  const handleSliderChange = (e, setter) => {
    console.log(e);
    e.stopPropagation(); // Prevents event from bubbling up
    setter(Number(e.target.value));
  };

  return (
    <NodeTemplate
      id={id}
      name='Image Filter'
      icon={<CiSliderHorizontal />}
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-input` },
        { type: 'source', position: Position.Right, id: `${id}-output` },
      ]}
    >
      <div style={{ position: 'relative' }}>
        <FormField
          label='Brightness'
          type='range'
          value={brightness}
          max={100}
          min={0}
          step={1}
          onChange={(e) => handleSliderChange(e, setBrightness)}
        />
        <span
          style={{
            position: 'absolute',
            top: '5px',
            right: '10px',
            fontSize: '14px',
          }}
        >
          {brightness}
        </span>
      </div>
      <div style={{ position: 'relative' }}>
        <FormField
          label='Contrast'
          type='range'
          value={contrast}
          max={100}
          min={0}
          step={1}
          onChange={(e) => setContrast(Number(e.target.value))}
        />
        <span
          style={{
            position: 'absolute',
            top: '5px',
            right: '10px',
            fontSize: '14px',
          }}
        >
          {contrast}
        </span>
      </div>
    </NodeTemplate>
  );
};
