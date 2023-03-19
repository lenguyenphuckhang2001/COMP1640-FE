import React, { useState } from 'react';

export const QaCoordinator = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [column1, setColumn1] = useState("");
  const [column2, setColumn2] = useState("");

  const handleSave = () => {
    if (selectedItem) {
      const updatedItems = items.map(item => {
        if (item.id === selectedItem.id) {
          return { ...item, column1, column2 };
        }
        return item;
      });
      setItems(updatedItems);
      setSelectedItem(null);
    } else {
      const newItem = { id: new Date().getTime(), column1, column2 };
      setItems([...items, newItem]);
    }
    setColumn1("");
    setColumn2("");
  };

  const handleDelete = (itemToDelete) => {
    const updatedItems = items.filter(item => item.id !== itemToDelete.id);
    setItems(updatedItems);
  };
  return (
    <div>
      <div>
      <div>
        <input
          type="text"
          value={column1}
          onChange={e => setColumn1(e.target.value)}
        />
        <input
          type="text"
          value={column2}
          onChange={e => setColumn2(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.column1}</td>
              <td>{item.column2}</td>
              <td>
                <button onClick={() => setSelectedItem(item)}>Edit</button>
                <button onClick={() => handleDelete(item)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}
