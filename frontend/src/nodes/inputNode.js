// inputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { NodeTemplate } from '../NodeTemplate';
import { FormField } from '../FormField';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace('customInput-', 'input_')
  );

  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <NodeTemplate
      id={id}
      name='Input'
      handles={[
        { type: 'source', position: Position.Right, id: `${id}-value` },
      ]}
    >
      <FormField
        label='Name:'
        type='text'
        value={currName}
        onChange={handleNameChange}
      />

      <FormField
        label='Type:'
        type='select'
        value={inputType}
        onChange={handleTypeChange}
        options={[{ value: 'Text' }, { value: 'File' }]}
      />
    </NodeTemplate>
  );
};
