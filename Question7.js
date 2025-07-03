function Card({ children }) {
  return (
    <div style={{
      border: '2px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      margin: '10px',
      width: '300px'
    }}>
      {children}
    </div>
  );
}

export default function Question7() {
  return (
    <Card>
      <h3>This is a Card</h3>
      <p>Content passed as children appears here!</p>
    </Card>
  );
}