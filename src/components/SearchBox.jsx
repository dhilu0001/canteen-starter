// ═══ FILE 5 — SEARCH ═════════════════════════════════════════
//
//  YOUR JOB: a text box that filters the menu.
//
//  Props you get:   value     → what's currently typed
//                   onChange  → tell App.jsx the text changed
//
//  An input needs BOTH halves. Every form in React works this way:
//
//    <input
//      className="search"
//      placeholder="Search dishes..."
//      value={value}                              ← what to show
//      onChange={(e) => onChange(e.target.value)} ← what to do
//    />
//
//  Miss `value`    → React doesn't know what's in the box
//  Miss `onChange` → the box freezes, you can't type
//
//  (The actual filtering happens in App.jsx — this file only
//   owns the box.)
//
//  ✅ DONE WHEN: typing `dos` in lowercase shows Masala Dosa, and
//     typing `pizza` shows your "no dishes" message — not a blank
//     screen.
//
//  Stuck? → solutions/finished/components/SearchBox.jsx
// ─────────────────────────────────────────────────────────────

export default function SearchBox({ value, onChange }) {
  return (
    <div className="search-row">
      <input className="search" placeholder="TODO: wire this up" />
    </div>
  );
}
