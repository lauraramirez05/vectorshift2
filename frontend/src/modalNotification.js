// modalNotification.js
import React from 'react';
import { Modal, Box } from '@mui/material';
import { IoIosClose } from 'react-icons/io';

export const ModalNotification = ({ close, data }) => {
  return (
    <Modal
      open={true}
      onClose={close}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: '10px',
        }}
      >
        <div
          style={{
            fontSize: '5rem',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          🎉
        </div>
        <h1 style={{ textAlign: 'center' }}>Submission Successful!</h1>
        <p style={{ textAlign: 'center' }}>
          Your graph has been submitted successfully
        </p>

        <p style={{ textAlign: 'center' }}>Number of Nodes: {data.num_nodes}</p>
        <p style={{ textAlign: 'center' }}>Number of Edges: {data.num_edges}</p>
        {data.is_dag ? (
          <p style={{ fontWeight: 700, textAlign: 'center' }}>
            Your Graph is a Directed Acyclic Graph (DAG)
          </p>
        ) : (
          <p style={{ fontWeight: 700, textAlign: 'center' }}>
            Your Graph is NOT a Directed Acyclic Graph (DAG)
          </p>
        )}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <IoIosClose
            style={{ fontSize: '2rem', cursor: 'pointer' }}
            onClick={close}
          />
        </div>
      </Box>
    </Modal>
  );
};
