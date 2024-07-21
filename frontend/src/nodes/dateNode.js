import React, { useState } from 'react';
import { NodeTemplate } from '../NodeTemplate';
import { Position } from 'reactflow';
import { FormField } from '../FormField';
import { CiCalendarDate } from 'react-icons/ci';

export const DateNode = ({ id, data }) => {
  const now = new Date();
  const todayDate = now.toISOString().split('T')[0]; // YYYY-MM-DD
  const todayTime = now.toTimeString().split(' ')[0].substring(0, 5); // HH:MM

  const [startDate, setStartDate] = useState(data?.startDate || todayDate);
  const [startTime, setStartTime] = useState(data?.startTime || todayTime);
  const [endDate, setEndDate] = useState(data?.endDate || '');
  const [endTime, setEndTime] = useState(data?.endTime || '');

  const handleDateChange = (e, setter) => {
    setter(e.target.value);
  };

  return (
    <NodeTemplate
      id={id}
      name='Pick Date'
      icon={<CiCalendarDate />}
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-input` },
        { type: 'source', position: Position.Right, id: `${id}-output` },
      ]}
    >
      <div>
        <FormField
          label='Start date:'
          type='date'
          value={startDate}
          onChange={(e) => handleDateChange(e, setStartDate)}
        />
        <FormField
          label=''
          type='time'
          value={startTime}
          onChange={(e) => handleDateChange(e, setStartTime)}
        />
      </div>
      <div>
        <FormField
          label='End Date:'
          type='date'
          value={endDate}
          onChange={(e) => handleDateChange(e, setEndDate)}
        />
        <FormField
          label=''
          type='time'
          value={endTime}
          onChange={(e) => handleDateChange(e, setEndTime)}
        />
      </div>
    </NodeTemplate>
  );
};
