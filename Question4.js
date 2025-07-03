function ProfileCard({ name, email, avatarUrl }) {
  return (
    <div style={{ 
      border: '1px solid #ddd',
      padding: '10px',
      width: '200px',
      borderRadius: '5px'
    }}>
      <img src={avatarUrl} alt={name} width="100%" />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}

export default function Question4() {
  return (
    <ProfileCard
      name="John Doe"
      email="john@example.com"
      avatarUrl="https://via.placeholder.com/150"
    />
  );
}