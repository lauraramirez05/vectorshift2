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

  console.log('options', options);

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
  };

  return (
    <label
      style={{
        display: 'flex',
        alignItems: 'center',
        fontSize: '1rem',
        border: '1px, solid black',
        padding: '5px',
        borderRadius: '5px',
        marginBottom: '10px',

        ...style,
      }}
    >
      {type === 'checkbox' ? (
        <>
          <input
            type={type}
            checked={checked}
            onChange={onChange}
            style={{ marginRight: '8px' }} // Add space between checkbox and label
          />
          <span>{label}</span>
        </>
      ) : (
        <div
          style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
        >
          <span
            style={{ fontSize: '12px', marginBottom: '5px', fontWeight: 700 }}
          >
            {label}
          </span>
          {type === 'select' ? (
            <select
              value={value}
              multiple={multiple}
              onChange={onChange}
              style={{ border: 'none', outline: 'none' }}
            >
              {options.map((option, index) => (
                <option key={`${index}-${value}`} value={option.value}>
                  {option.value}
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
              style={{
                resize: 'none',
                height: '15px',
                width: '97%',
                border: 'none',
                outline: 'none',
              }}
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
              style={{
                border: 'none',
                outline: 'none',
              }}
            />
          )}
        </div>
      )}
    </label>
  );
};
