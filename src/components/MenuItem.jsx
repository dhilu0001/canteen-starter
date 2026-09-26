// ═══ FILE 1 — ONE DISH ═══════════════════════════════════════
//
//  YOUR JOB: show one dish — its name, its price, an Add button.
//
//  Props you get:   item    → { id, name, price, veg }
//                   onAdd   → call onAdd(item) when Add is clicked
//
//  ── STEP A ───────────────────────────────────────────────────
//  Replace the placeholder below with this:
//
//    <article className="item">
//      <span className="item-name">{item.name}</span>
//      <span className="item-price">₹{item.price}</span>
//      <button className="add" onClick={() => onAdd(item)}>Add</button>
//    </article>
//
//  ⚠ It must be onClick={() => onAdd(item)}
//    NOT   onClick={onAdd(item)}  — that runs instantly, forever.
//
//  ✅ CHECK: all 8 dishes show a name, a price and a button.
//
//
//  ── STEP B ───────────────────────────────────────────────────
//  Every Indian menu marks veg and non-veg. Add this as the FIRST
//  line inside the <article>:
//
//    <span className="dot veg"></span>
//
//  ✅ CHECK: a green square appears next to every dish.
//
//
//  ── STEP C — now look properly ───────────────────────────────
//  Chicken Biriyani has a GREEN dot. So does Parotta & Beef.
//
//  That's wrong, and it's the kind of wrong that gets a restaurant
//  in real trouble.
//
//  The problem: you hardcoded "veg" for all 8 dishes. But each dish
//  already knows what it is — look at src/data/menu.js, every one
//  has  veg: true  or  veg: false.
//
//  So the class name has to CHANGE depending on the dish:
//
//    <span className={item.veg ? 'dot veg' : 'dot nonveg'}></span>
//
//  Read it as a question:
//    "is item.veg true?"   yes → use 'dot veg'
//                          no  → use 'dot nonveg'
//
//  This is NOT React syntax. It's plain JavaScript — try it in the
//  console:
//
//    true  ? 'green' : 'red'     // → 'green'
//    false ? 'green' : 'red'     // → 'red'
//
//  className just takes whatever string comes out.
//
//  ✅ DONE WHEN: biriyani and beef are red, everything else green.
//
//  Stuck? → solutions/finished/components/MenuItem.jsx
// ─────────────────────────────────────────────────────────────

export default function MenuItem({ item, onAdd }) {
  return (
    <article className="item">
      <span className="item-name">TODO: show {item.name} here</span>
    </article>
  );
}
