// textNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { NodeTemplate } from '../NodeTemplate';
import { FormField } from '../FormField';
import { CiTextAlignJustify } from 'react-icons/ci';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [handles, setHandles] = useState([
    { type: 'source', position: Position.Right, id: `${id}-output` },
  ]);

  const handleTextChange = (e) => {
    const offsetHeight = e.target.offsetHeight + 30;
    setCurrText(e.target.value);

    const pattern = /\{\{(\w+)\}\}/g;
    let match;
    const newHandles = [
      { type: 'source', position: Position.Right, id: `${id}-output` },
    ];

    while ((match = pattern.exec(e.target.value)) !== null) {
      const name = match[1];
      const handleId = `${id}-input-${name}`;

      newHandles.push({
        type: 'target',
        position: Position.Left,
        id: handleId,
        name: name,
      });
    }

    // Remove duplicates based on the id
    const filteredHandles = newHandles.reduce((acc, curr) => {
      if (!acc.some((handle) => handle.id === curr.id)) {
        acc.push(curr);
      }
      return acc;
    }, []);

    // Assign styles to handles for positioning
    for (let i = 1; i < filteredHandles.length; i++) {
      filteredHandles[i].style = {
        top: `${(i * offsetHeight) / (newHandles.length - 1)}px`,
      };
    }

    setHandles(filteredHandles);
  };

  return (
    <NodeTemplate
      id={id}
      name='Text'
      icon={<CiTextAlignJustify />}
      handles={handles}
    >
      <FormField
        id={id}
        label='Text:'
        type='text'
        value={currText}
        onChange={handleTextChange}
        rows='auto'
      />
    </NodeTemplate>
  );
};
