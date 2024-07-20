import React, { useRef, useEffect } from 'react';
import { Position } from 'reactflow';

export const FormField = ({
  id,
  label,
  type,
  value,
  onChange,
  options = [],
  checked = false,
  accept = '',
  min = undefined,
  max = undefined,
  step = undefined,
  rows = 0,
  multiple = false,
  style = {},
  setHandles,
}) => {
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (type === 'textarea' && textAreaRef.current) {
      // Adjust the height initially
      resizeTextArea();
    }
  }, [value]);

  const resizeTextArea = () => {
    const textArea = textAreaRef.current;

    if (textArea) {
      textArea.style.height = '15px'; // Reset height to auto to calculate the new height
      textArea.style.height = `${textArea.scrollHeight}px`; // Set height to scrollHeight
    }
  };

  const handleInput = (e) => {
    if (type === 'textarea' || type === 'text') {
      resizeTextArea();
    }

    // if (e.target.value.length > 4) {
    //   const pattern = /\{\{(\w+)\}\}/g;

    //   let match;
    //   while ((match = pattern.exec(e.target.value)) !== null) {
    //     console.log('MATHC', match);

    //     const name = match[1];
    //     console.log(name);
    //     console.log('inside while');
    //     setHandles((previousHandles) => [
    //       ...previousHandles,
    //       {
    //         type: 'target',
    //         position: Position.Left,
    //         id: `${id}-output`,
    //         name: `${name}`,
    //       },
    //     ]);
    //   }

    //   console.log('match last', match);
    // }
  };

  return (
    <label>
      {label}
      {type === 'select' ? (
        <select value={value} multiple={multiple} onChange={onChange}>
          {options.map((option, index) => (
            <option key={`${index}-${value}`} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === 'textarea' || type === 'text' ? (
        <textarea
          ref={textAreaRef}
          value={value}
          onChange={onChange}
          onInput={handleInput}
          rows={rows}
          style={{ resize: 'none', height: '15px', ...style }}
        />
      ) : (
        <input
          type={type}
          value={type === 'file' ? undefined : value}
          onChange={onChange}
          checked={type === 'checkbox' ? checked : undefined}
          accept={accept}
          min={type === 'number' || type === 'range' ? min : undefined}
          max={type === 'number' || type === 'range' ? max : undefined}
          step={type === 'number' || type === 'range' ? step : undefined}
        />
      )}
    </label>
  );
};
