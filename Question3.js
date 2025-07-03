function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

export default function Question3() {
  const handleClick = () => {
    console.log("Button was clicked!");
  };

  return <Button label="Click Me" onClick={handleClick} />;
}