import React, { useState } from "react";


export default function TodoApp() {
  const [toDoList, setToDoList] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    setToDoList([...toDoList, { title: newItem, done: "" }]);
    setNewItem("");
  };

  const setDone = (index, val) => {
    let tempList = toDoList.map((el, i) =>
      el.title === toDoList[index].title ? { title: el.title, done: val } : el
    );
    setToDoList(tempList);
  };

  const handleNewItem = (event) => setNewItem(event.target.value);
  const deteleItem = (index) => {
    const newArray = toDoList.filter((el, i) => i !== index);
    setToDoList(newArray);
  };

  const listItems = toDoList.map((item, index) => (
    <li key={index}>
      {item.title}
      <button onClick={() => deteleItem(index)}>Delete item </button>
      {item.done === "" ? (
        <>
          <button onClick={() => setDone(index, "done")}>Set done item </button>
          <button onClick={() => setDone(index, "not done")}>
            Set not done
          </button>
        </>
      ) : (
        <div>{item.done}</div>
      )}
    </li>
  ));

  return (
    <div>
      <button onClick={addItem}>Add item </button>
      <input onChange={handleNewItem} type="text" value={newItem} />

      <h1>List</h1>
      {listItems}
    </div>
  );
}
