// ═══ FILE 2 — THE WHOLE MENU ═════════════════════════════════
//
//  YOUR JOB: turn a list of dishes into a list of <MenuItem>s.
//
//  Props you get:   items   → an array of dishes
//                   onAdd   → pass it straight down to each MenuItem
//
//  This is `map` from this morning. Same method. Now it builds
//  screens instead of strings.
//
//  Write this inside the <main>:
//
//    {items.map((item) => (
//      <MenuItem key={item.id} item={item} onAdd={onAdd} />
//    ))}
//
//  ⚠ key={item.id} — never key={index}. Index breaks the moment
//    the list is filtered or sorted.
//
//  ✅ DONE WHEN: all 8 dishes appear, and the Console has no
//     "key" warning in it.
//
//  Stuck? → solutions/finished/components/MenuList.jsx
// ─────────────────────────────────────────────────────────────

import MenuItem from './MenuItem.jsx';

export default function MenuList({ items, onAdd }) {
  return (
    <main className="menu">
      <p className="empty">TODO: map over items here</p>
    </main>
  );
}
