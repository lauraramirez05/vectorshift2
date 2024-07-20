import React, { useState } from 'react';
import { NodeTemplate } from '../NodeTemplate';
import { Position } from 'reactflow';
import { FormField } from '../FormField';

export const FileUploadNode = ({ id, data }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <NodeTemplate
      id={id}
      name=''
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-input` },
        { type: 'source', position: Position.Right, id: `${id}-output` },
      ]}
    >
      <FormField
        label='Upload File'
        type='file'
        accept='.jpg, .png, .pdf'
        onChange={handleFileChange}
      />
    </NodeTemplate>
  );
};
