import React, { useState } from 'react';
import { NodeTemplate } from '../NodeTemplate';
import { Position } from 'reactflow';
import { FormField } from '../FormField';
import { MdOutlineFileUpload } from 'react-icons/md';

export const FileUploadNode = ({ id, data }) => {
  console.log(data);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <NodeTemplate
      id={id}
      name='Upload File'
      icon={<MdOutlineFileUpload />}
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
