import React, { useState } from 'react';
import { NodeTemplate } from '../NodeTemplate';
import { Position } from 'reactflow';
import { FormField } from '../FormField';

export const MultiSelectNode = ({ id, data }) => {
  const [selectedOptions, setSelectedOptions] = useState(data?.selected || []);

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const handleChange = (e) => {
    const values = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedOptions(values);
  };

  return (
    <NodeTemplate
      id={id}
      name='Multi-Select Dropdown'
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-input` },
        { type: 'source', position: Position.Right, id: `${id}-output` },
      ]}
    >
      <FormField
        label='Select Options'
        type='select'
        value={selectedOptions}
        onChange={handleChange}
        multiple
        options={options}
      />
    </NodeTemplate>
  );
};
