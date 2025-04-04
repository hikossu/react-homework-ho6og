function App() {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  return (
    <div>
      <h1>Homework 1</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}