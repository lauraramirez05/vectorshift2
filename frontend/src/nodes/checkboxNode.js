import React, { useState } from 'react';
import { Position } from 'reactflow';
import { NodeTemplate } from '../NodeTemplate';
import { FormField } from '../FormField';

export const CheckboxNode = ({ id, data }) => {
  const [currNumberValue, setCurrNumberValue] = useState(data?.value || 1);
  const [newCheckboxLabel, setNewCheckboxLabel] = useState('');
  const [checkboxes, setCheckboxes] = useState([
    { id: 'checkbox1', label: 'enable-filter', checked: false },
  ]);

  const handleNumberValueChange = (e) => {
    setCurrNumberValue(Number(e.target.value)); // Ensure value is a number
  };

  const handleCheckboxChange = (id) => (e) => {
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, checked: e.target.checked }
          : checkbox
      )
    );
  };

  const addCheckBox = () => {
    if (newCheckboxLabel.trim() === '') return; // Avoid adding empty checkboxes

    const newCheckbox = {
      id: `checkbox-${Date.now()}`,
      label: newCheckboxLabel,
      checked: false,
    };

    setCheckboxes((prevCheckboxes) => [...prevCheckboxes, newCheckbox]);
    setNewCheckboxLabel(''); // Clear input after adding
  };

  const handleNewCheckboxLabelChange = (e) => {
    setNewCheckboxLabel(e.target.value);
  };

  return (
    <NodeTemplate
      id={id}
      name='Checkbox'
      handles={[
        { type: 'source', position: Position.Right, id: `${id}-value` },
      ]}
    >
      <FormField
        label='Max Chunks Per Query'
        type='number'
        value={currNumberValue}
        onChange={handleNumberValueChange}
        min={0}
        step={1}
      />

      {checkboxes.map((checkbox) => (
        <FormField
          key={checkbox.id}
          label={checkbox.label}
          type='checkbox'
          checked={checkbox.checked}
          onChange={handleCheckboxChange(checkbox.id)}
        />
      ))}
      <div>
        <p>Add new checkbox</p>
        <FormField
          type='text'
          value={newCheckboxLabel}
          onChange={handleNewCheckboxLabelChange}
        />
        <button onClick={addCheckBox}>+</button>
      </div>
    </NodeTemplate>
  );
};
