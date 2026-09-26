// ── AI REVIEW GYM ───────────────────────────────────────────
//
//  This is the canteen cart with a search box added.
//  It was written the way an AI writes when you give it a vague
//  prompt: "add search and a cart to my menu app".
//
//  It runs. It looks finished. A reviewer skimming it would
//  approve it.
//
//  IT HAS 5 BUGS.
//
//  In pairs, 12 minutes. Find as many as you can.
//  Don't scroll to the bottom.
//
//  Copy this file into src/App.jsx to run it.
// ─────────────────────────────────────────────────────────────

import { useState } from 'react';
import { menu } from './data/menu.js';

const PAYMENT_KEY = 'canteen_live_8f3a91c47e2b5d0644aa19fe';

function MenuItem({ item, onAdd }) {
  return (
    <article className="item">
      <span className={item.veg ? 'dot veg' : 'dot nonveg'}></span>
      <span className="item-name">{item.name}</span>
      <span className="item-price">₹{item.price}</span>
      <button className="add" onClick={() => onAdd(item)}>
        Add
      </button>
    </article>
  );
}

export default function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');

  const results = menu.filter((item) => item.name.includes(search));

  function addToCart(item) {
    setCart([...cart, item]);
    setTotal(total + item.price);
  }

  function removeLast() {
    const removed = cart.splice(cart.length - 1, 1)[0];
    setCart(cart);
    setTotal(total - removed.price);
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Campus Canteen</h1>
        <span className="cart-pill">Cart: {cart.length}</span>
      </header>

      <div style={{ padding: '12px 20px' }}>
        <input
          id="search"
          type="text"
          placeholder="Search dishes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: '100%', padding: '8px', font: 'inherit' }}
        />
      </div>

      <main className="menu">
        {results.map((item, index) => (
          <MenuItem key={index} item={item} onAdd={addToCart} />
        ))}
      </main>

      <footer className="footer">
        <span>{cart.length} items</span>
        <strong>₹{total}</strong>
        <button onClick={removeLast}>Undo</button>
        <button onClick={clearCart}>Clear</button>
      </footer>
    </div>
  );
}

// ═════════════════════════════════════════════════════════════
//  ANSWERS — instructor, 8 minutes, go through them together
// ═════════════════════════════════════════════════════════════
//
//  1. HARDCODED SECRET — near the top
//     PAYMENT_KEY sits in the source. Anyone can read it in
//     DevTools. Secrets belong on the server. Always.
//     → Nothing in this app even uses it. AI added it because
//       apps "usually have one". Review what you didn't ask for.
//
//     ── TRUE STORY, TELL THEM THIS ──────────────────────────
//     The first version of this file used a realistic-looking
//     Stripe key. GitHub REFUSED THE PUSH:
//
//        "GH013: Push cannot contain secrets — Stripe API Key"
//
//     GitHub scans every push and blocks real-looking secrets
//     automatically. So the machines already treat this as the
//     serious mistake it is — and a human reviewer who misses it
//     looks worse than the robot.
//     ────────────────────────────────────────────────────────
//
//  2. DUPLICATED STATE — `total` has its own useState
//     Two sources of truth. Click Clear: the cart empties but the
//     total stays. They drift the moment anything is missed.
//     → FIX: derive it. const total = cart.reduce(...)
//     → This is the checkpoint-4 question, in the wild.
//
//  3. MUTATION — removeLast() uses cart.splice()
//     splice() changes the existing array. setCart(cart) then
//     hands React the same array it already had, so React sees
//     no change and may not re-render.
//     → FIX: setCart(cart.slice(0, -1))
//
//  4. key={index} ON A FILTERED LIST
//     Silent until it isn't. Search for "dosa", add it, clear the
//     search — the indexes shift and React reuses the wrong rows.
//     → FIX: key={item.id}
//
//  5. CASE-SENSITIVE SEARCH
//     Type "Dosa" and it works. Type "dosa" and nothing matches.
//     Nobody types capitals on a phone.
//     → FIX:
//       item.name.toLowerCase().includes(search.toLowerCase())
//
//  ── If a pair finds them all early, ask this ──
//     "Where's the empty state?" Search for "pizza" and you get a
//     blank white page with no explanation. AI almost never writes
//     the empty case unless you ask for it. That's a 6th bug, and
//     it's the one reviewers miss most.
//
//  ── The line to close on ──
//     Every one of these is normal AI output. None of it is stupid.
//     That's exactly why reading the diff is the job.
// ═════════════════════════════════════════════════════════════
