function Welcome({ name }) {
  return <h2>Hello, {name}!</h2>;
}

export default function Question1() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      <Welcome name="Charlie" />
    </div>
  );
}