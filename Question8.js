function StatusIndicator({ isOnline }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
      <div style={{
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: isOnline ? 'green' : 'red'
      }} />
      <span>{isOnline ? 'Online' : 'Offline'}</span>
    </div>
  );
}

export default function Question8() {
  return (
    <div>
      <StatusIndicator isOnline={true} />
      <StatusIndicator isOnline={false} />
    </div>
  );
}