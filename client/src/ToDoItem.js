function ToDoItem({ data, category }) {
  let color;
  switch (category) {
    case "shopping":
      color = "blue";
      break;
    case "activity":
      color = "red";
      break;
    default:
      color = "green";
  }

  return (
    <div style={{ width: "100%", background: color, textAlign: "left" }}>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default ToDoItem;
