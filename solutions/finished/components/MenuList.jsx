// FILE 2 — finished
import MenuItem from './MenuItem.jsx';

export default function MenuList({ items, onAdd }) {
  if (items.length === 0) {
    return (
      <main className="menu">
        <p className="empty">No dishes match your search.</p>
      </main>
    );
  }

  return (
    <main className="menu">
      {items.map((item) => (
        <MenuItem key={item.id} item={item} onAdd={onAdd} />
      ))}
    </main>
  );
}
