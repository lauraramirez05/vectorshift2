import React, { useState } from 'react';
import { NodeTemplate } from '../NodeTemplate';
import { Position } from 'reactflow';
import { FormField } from '../FormField';
import { BiSelectMultiple } from 'react-icons/bi';
import { IoIosClose } from 'react-icons/io';

export const MultiSelectNode = ({ id, data }) => {
  const [selectedOptions, setSelectedOptions] = useState(data?.selected || []);

  const options = [
    { value: 'option1', label: 'Option 1', checked: false },
    { value: 'option2', label: 'Option 2', checked: false },
    { value: 'option3', label: 'Option 3', checked: false },
  ];

  const handleChange = (e) => {
    const values = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );

    setSelectedOptions(values);

    const updatedSelections = values.reduce((acc, value) => {
      if (selectedOptions.includes(value)) {
        return acc.filter((item) => item !== value);
      } else {
        return [...acc, value];
      }
    }, selectedOptions);

    setSelectedOptions(updatedSelections);
  };

  const handleRemoveSelection = (value) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.filter((option) => option !== value)
    );
  };

  return (
    <NodeTemplate
      id={id}
      name='Multi-Select Dropdown'
      icon={<BiSelectMultiple />}
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-input` },
        { type: 'source', position: Position.Right, id: `${id}-output` },
      ]}
    >
      <div
        style={{
          marginBottom: '20px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        {selectedOptions.map((selection) => (
          <div
            key={selection}
            style={{
              border: '2px rgb(242 197 255) black',
              width: 'fit-content',
              padding: '5px',
              borderRadius: '40px',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgb(242 197 255 / 30%)',
            }}
          >
            <span style={{ fontSize: '14px', fontWeight: 700 }}>
              {selection}
            </span>
            <span
              onClick={() => handleRemoveSelection(selection)}
              style={{
                cursor: 'pointer',
                marginLeft: '8px',
                color: 'rgba(60, 21, 115, 1)',
                fontSize: '14px',
                fontWeight: 700,
              }}
            >
              <IoIosClose />
            </span>
          </div>
        ))}
      </div>
      <FormField
        label='Select Options'
        type='select'
        value={selectedOptions}
        onChange={handleChange}
        options={options}
      />
    </NodeTemplate>
  );
};
