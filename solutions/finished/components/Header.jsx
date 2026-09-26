// ═══ DONE FOR YOU — read this one, don't change it ═══════════
//
//  This is what a finished component looks like. Every file you
//  write today has this same shape:
//
//    1. a function with a Capital letter name
//    2. it takes props — the stuff in { } below
//    3. it returns markup
//    4. export default at the end
//
//  `count` is a PROP. App.jsx decides what it is and passes it in.
//  This file doesn't know or care where the number came from.
// ─────────────────────────────────────────────────────────────

export default function Header({ count }) {
  return (
    <header className="header">
      <h1>Campus Canteen</h1>
      <span className="cart-pill">Cart: {count}</span>
    </header>
  );
}
