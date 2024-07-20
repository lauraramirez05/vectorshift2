import React, { useState } from 'react';
import { Position } from 'reactflow';
import { NodeTemplate } from '../NodeTemplate';
import { FormField } from '../FormField';

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
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-input` },
        { type: 'source', position: Position.Right, id: `${id}-output` },
      ]}
    >
      <div>
        <FormField
          label='Brightness'
          type='range'
          value={brightness}
          max={100}
          min={0}
          step={1}
          onChange={(e) => handleSliderChange(e, setBrightness)}
        />
        {brightness}
      </div>
      <div>
        <FormField
          label='Contrast'
          type='range'
          value={contrast}
          max={100}
          min={0}
          step={1}
          onChange={(e) => setContrast(Number(e.target.value))}
        />
        {contrast}
      </div>
    </NodeTemplate>
  );
};
