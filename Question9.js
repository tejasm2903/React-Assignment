function ClickLogger({ logMessage }) {
  return (
    <button onClick={logMessage}>
      Click to Log Message
    </button>
  );
}

export default function Question9() {
  const handleClick = () => {
    console.log("Button clicked from parent component!");
  };

  return <ClickLogger logMessage={handleClick} />;
}