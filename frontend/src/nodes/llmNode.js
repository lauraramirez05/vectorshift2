// llmNode.js

import { Handle, Position } from 'reactflow';
import { NodeTemplate } from '../NodeTemplate';

export const LLMNode = ({ id, data }) => {
  return (
    <NodeTemplate
      id={id}
      name='LLM'
      handles={[
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-system`,
          style: { top: `${100 / 3}%` },
        },
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-prompt`,
          style: { top: `${200 / 3}%` },
        },
        {
          type: 'source',
          position: Position.Right,
          id: `${id}-response`,
        },
      ]}
    >
      <div>
        <span>This is a LLM.</span>
      </div>
    </NodeTemplate>
  );
};
