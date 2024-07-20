// toolbar.js
import { DraggableNode } from './draggableNode';
import { MdInput } from 'react-icons';

export const PipelineToolbar = () => {
  return (
    <div style={{ padding: '10px' }}>
      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <DraggableNode type='customInput' label='Input' icon={<MdInput />} />
        <DraggableNode type='llm' label='LLM' />
        <DraggableNode type='customOutput' label='Output' />
        <DraggableNode type='text' label='Text' />
        <DraggableNode type='checkbox' label='Checkbox' />
        <DraggableNode type='fileUpload' label='File Upload' />
        <DraggableNode type='slider' label='Slider' />
        <DraggableNode type='multiSelect' label='Multi-Select Dropdown' />
        <DraggableNode type='customDate' label='Date' />
        <DraggableNode type='notes' label='Notes' />
      </div>
    </div>
  );
};
