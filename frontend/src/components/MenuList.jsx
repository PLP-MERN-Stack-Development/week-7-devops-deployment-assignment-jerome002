// src/components/MenuList.jsx
import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_URL;

export default function MenuList() {
  const [menu, setMenu] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", category: "" });

  const fetchMenu = async () => {
    const res = await fetch(`${API}/api/menu`);
    const data = await res.json();
    setMenu(data);
  };

  const addItem = async (e) => {
    e.preventDefault();
    await fetch(`${API}/api/menu`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({ name: "", price: "", category: "" });
    fetchMenu();
  };

  const deleteItem = async (id) => {
    await fetch(`${API}/api/menu/${id}`, { method: "DELETE" });
    fetchMenu();
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <div className="menu">
      <h2>Restaurant Menu</h2>
      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Item name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {menu.map((item) => (
          <li key={item._id}>
            <strong>{item.name}</strong> - ${item.price} ({item.category})
            <button onClick={() => deleteItem(item._id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
