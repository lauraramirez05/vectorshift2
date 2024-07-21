import React, { useState } from 'react';
import { NodeTemplate } from '../NodeTemplate';
import { Position } from 'reactflow';
import { FormField } from '../FormField';
import { CiCalendarDate } from 'react-icons/ci';
import { IoIosTime, IoIosClose } from 'react-icons/io';

export const DateNode = ({ id, data }) => {
  const now = new Date();
  const todayDate = now.toISOString().split('T')[0]; // YYYY-MM-DD
  const todayTime = now.toTimeString().split(' ')[0].substring(0, 5); // HH:MM

  const [startDate, setStartDate] = useState(data?.startDate || todayDate);
  const [startTime, setStartTime] = useState(data?.startTime || todayTime);
  const [endDate, setEndDate] = useState(data?.endDate || '');
  const [endTime, setEndTime] = useState(data?.endTime || '');

  const [showStartTime, setShowStartTime] = useState(false);
  const [showEndTime, setShowEndTime] = useState(false);

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
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <FormField
          label='Start date:'
          type='date'
          value={startDate}
          onChange={(e) => handleDateChange(e, setStartDate)}
        />
        {showStartTime ? (
          <div style={{ position: 'relative' }}>
            <FormField
              label=''
              type='time'
              value={startTime}
              onChange={(e) => handleDateChange(e, setStartTime)}
            />
            <IoIosClose
              onClick={() => setShowStartTime(!showStartTime)}
              style={{
                position: 'absolute',
                top: '0',
                right: '',
              }}
            />
          </div>
        ) : (
          <IoIosTime
            onClick={() => setShowStartTime(true)}
            style={{ alignSelf: 'flex-end', marginBottom: '5px' }}
          />
        )}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <FormField
          label='End Date:'
          type='date'
          value={endDate}
          onChange={(e) => handleDateChange(e, setEndDate)}
        />
        {showEndTime ? (
          <div style={{ position: 'relative' }}>
            <FormField
              label=''
              type='time'
              value={endTime}
              onChange={(e) => handleDateChange(e, setEndTime)}
            />
            <IoIosClose
              onClick={() => setShowEndTime(!showEndTime)}
              style={{
                position: 'absolute',
                top: '0',
                right: '',
              }}
            />
          </div>
        ) : (
          <IoIosTime
            onClick={() => setShowEndTime(true)}
            style={{ alignSelf: 'flex-end', marginBottom: '5px' }}
          />
        )}
      </div>
    </NodeTemplate>
  );
};
