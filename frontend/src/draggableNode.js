// draggableNode.js

export const DraggableNode = ({ type, label, icon }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData(
      'application/reactflow',
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      style={{
        cursor: 'grab',
        minWidth: '80px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '8px',
        // backgroundColor: '#1C2536',
        background:
          'linear-gradient(to bottom left, rgba(29, 23, 74, 1), rgba(60, 21, 115, 1))',
        justifyContent: 'center',
        flexDirection: 'column',
        boxShadow: '1px 3px 12px 0px rgba(156,103,156,1)',
      }}
      draggable
    >
      <div
        style={{
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'center',
          textAlign: 'center',
          width: 'fit-content',
          // padding: '1rem',
        }}
      >
        <div style={{ alignSelf: 'center', fontSize: '1.7rem' }}>{icon}</div>
        <div style={{ fontSize: '11px' }}>{label}</div>
      </div>
    </div>
  );
};
