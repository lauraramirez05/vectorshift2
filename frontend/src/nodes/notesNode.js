import React, { useState } from 'react';
import { NodeTemplate } from '../NodeTemplate';
import { FormField } from '../FormField';

export const NotesNode = ({ id, data }) => {
  const [notesContent, setNotesContent] = useState(data?.notesContent || '');

  return (
    // <NodeTemplate id={id} name='Notes'>

    <div
      style={{
        borderRadius: '8px',
        padding: '5px',
        width: '220px',
        backgroundColor: 'rgb(225 196 238 / 50%);',
        boxShadow: 'rgb(198 167 198) 1px 3px 12px 0px',
      }}
    >
      <span
        style={{
          fontSize: '14px',
          fontWeight: 700,
          color: 'rgba(60, 21, 115, 1)',
        }}
      >
        Note
      </span>
      <FormField
        label=''
        type='textarea'
        value={notesContent}
        onChange={(e) => setNotesContent(e.target.value)}
        style={{ padding: 0, marginBottom: '0', border: 'none' }}
      />
    </div>

    // </NodeTemplate>
  );
};
