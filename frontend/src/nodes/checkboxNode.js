import React, { useState } from 'react';
import { Position } from 'reactflow';
import { NodeTemplate } from '../NodeTemplate';
import { FormField } from '../FormField';
import { IoIosCheckbox, IoIosAddCircle } from 'react-icons/io';

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
      icon={<IoIosCheckbox />}
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
          style={{ border: 'none', padding: '0px' }}
        />
      ))}
      <div
        style={{
          display: 'flex',
          border: '1px solid black',
          borderRadius: '5px',
        }}
      >
        <FormField
          label='Add New Checkbox'
          type='text'
          value={newCheckboxLabel}
          onChange={handleNewCheckboxLabelChange}
          style={{ border: 'none', marginBottom: '0' }}
        />
        <IoIosAddCircle onClick={addCheckBox} style={{ alignSelf: 'center' }} />
        {/* <button style={{ height: '20px' }}>+</button> */}
      </div>
    </NodeTemplate>
  );
};
