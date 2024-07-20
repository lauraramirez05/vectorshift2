import React, { useState } from 'react';
import { NodeTemplate } from '../NodeTemplate';
import { FormField } from '../FormField';

export const NotesNode = ({ id, data }) => {
  const [notesContent, setNotesContent] = useState(data?.notesContent || '');

  return (
    <NodeTemplate id={id} name='Notes'>
      <FormField
        label=''
        type='textarea'
        value={notesContent}
        onChange={(e) => setNotesContent(e.target.value)}
      />
    </NodeTemplate>
  );
};
