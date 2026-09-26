// ═══ FILE 3 — THE BRAIN ══════════════════════════════════════
//
//  Do FILE 1 and FILE 2 first.
//
//  Every other file just displays things. This one REMEMBERS things.
//
//  YOUR JOB: hold the cart, and let dishes be added to it.
//
//  1. At the top of App():
//
//       const [cart, setCart] = useState([]);
//
//  2. Then the function that adds:
//
//       function addToCart(item) {
//         setCart([...cart, item]);
//       }
//
//     ⚠ NOT cart.push(item) — that changes the old array, React
//       sees no change, and nothing on screen moves.
//
//  3. Pass them down:  count={cart.length}   onAdd={addToCart}
//                      cart={cart}
//
//  WHY IS THE CART IN HERE and not in MenuItem?
//  Because the Header needs it too. When two components need the
//  same fact, it belongs to the one above both of them.
//  That's called "lifting state up".
//
//  ✅ DONE WHEN: clicking Add makes the header count go 0, 1, 2...
//
//  ── FILE 5 (search) comes back here too ──────────────────────
//     const [search, setSearch] = useState('');
//
//     const results = menu.filter((item) =>
//       item.name.toLowerCase().includes(search.toLowerCase())
//     );
//
//     ...then pass results to MenuList instead of menu.
//     ⚠ toLowerCase on BOTH sides, or "dosa" won't match "Dosa".
//
//  Stuck? → solutions/finished/App.jsx
// ─────────────────────────────────────────────────────────────

import { useState } from 'react';
import { menu } from './data/menu.js';

import Header from './components/Header.jsx';
import SearchBox from './components/SearchBox.jsx';
import MenuList from './components/MenuList.jsx';
import CartFooter from './components/CartFooter.jsx';

export default function App() {
  // TODO (file 3): const [cart, setCart] = useState([]);
  // TODO (file 5): const [search, setSearch] = useState('');

  function addToCart(item) {
    // TODO (file 3)
    console.log('added:', item.name);
  }

  return (
    <div className="app">
      <Header count={0} />
      <SearchBox value="" onChange={() => {}} />
      <MenuList items={menu} onAdd={addToCart} />
      <CartFooter cart={[]} />
    </div>
  );
}
