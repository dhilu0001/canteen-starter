// FILE 3 — finished
import { useState } from 'react';
import { menu } from './data/menu.js';

import Header from './components/Header.jsx';
import SearchBox from './components/SearchBox.jsx';
import MenuList from './components/MenuList.jsx';
import CartFooter from './components/CartFooter.jsx';

export default function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');

  // Calculated on every render, not stored.
  const results = menu.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  function addToCart(item) {
    setCart([...cart, item]);
  }

  return (
    <div className="app">
      <Header count={cart.length} />
      <SearchBox value={search} onChange={setSearch} />
      <MenuList items={results} onAdd={addToCart} />
      <CartFooter cart={cart} />
    </div>
  );
}
