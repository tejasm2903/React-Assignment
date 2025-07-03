function ListItems({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default function Question2() {
  return <ListItems items={["Apple", "Banana", "Cherry"]} />;
}