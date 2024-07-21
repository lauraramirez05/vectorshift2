// toolbar.js
import { DraggableNode } from './draggableNode';
import { MdInput, MdOutlineOutput, MdOutlineFileUpload } from 'react-icons/md';
import { LuBrainCircuit } from 'react-icons/lu';
import {
  CiTextAlignJustify,
  CiSliderHorizontal,
  CiCalendarDate,
} from 'react-icons/ci';
import { IoIosCheckboxOutline } from 'react-icons/io';
import { BiSelectMultiple } from 'react-icons/bi';
import { FaRegNoteSticky } from 'react-icons/fa6';

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
        <DraggableNode type='llm' label='LLM' icon={<LuBrainCircuit />} />
        <DraggableNode
          type='customOutput'
          label='Output'
          icon={<MdOutlineOutput />}
        />
        <DraggableNode type='text' label='Text' icon={<CiTextAlignJustify />} />
        <DraggableNode
          type='checkbox'
          label='Checkbox'
          icon={<IoIosCheckboxOutline />}
        />
        <DraggableNode
          type='fileUpload'
          label='File Upload'
          icon={<MdOutlineFileUpload />}
        />
        <DraggableNode
          type='slider'
          label='Slider'
          icon={<CiSliderHorizontal />}
        />
        {/* <DraggableNode
          type='multiSelect'
          label='Multi-Select Dropdown'
          icon={<BiSelectMultiple />}
        /> */}
        <DraggableNode
          type='customDate'
          label='Date'
          icon={<CiCalendarDate />}
        />
        <DraggableNode type='notes' label='Notes' icon={<FaRegNoteSticky />} />
      </div>
    </div>
  );
};
