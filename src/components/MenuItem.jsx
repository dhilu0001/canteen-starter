// ═══ FILE 1 — ONE DISH ═══════════════════════════════════════
//
//  YOUR JOB: show one dish — its name, its price, an Add button.
//
//  Props you get:   item    → { id, name, price, veg }
//                   onAdd   → call onAdd(item) when Add is clicked
//
//  Write this:
//
//    <article className="item">
//      <span className={item.veg ? 'dot veg' : 'dot nonveg'}></span>
//      <span className="item-name">{item.name}</span>
//      <span className="item-price">₹{item.price}</span>
//      <button className="add" onClick={() => onAdd(item)}>Add</button>
//    </article>
//
//  ⚠ It must be onClick={() => onAdd(item)}
//    NOT   onClick={onAdd(item)}  — that runs instantly, forever.
//
//  ✅ DONE WHEN: you see dish names and prices instead of the grey
//     placeholder below.
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
