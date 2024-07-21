import React, { useState } from 'react';
import { NodeTemplate } from '../NodeTemplate';
import { FormField } from '../FormField';

export const NotesNode = ({ id, data }) => {
  const [notesContent, setNotesContent] = useState(data?.notesContent || '');

  return (
    // <NodeTemplate id={id} name='Notes'>

    <div
      style={{
        border: '1px solid black',
        borderRadius: '8px',
        padding: '5px',
        width: '220px',
      }}
    >
      <span style={{ fontSize: '14px', fontWeight: 700 }}>Note</span>
      <FormField
        id={id}
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
