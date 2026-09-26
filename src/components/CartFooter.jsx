// ═══ FILE 4 — THE TOTAL ══════════════════════════════════════
//
//  Do FILE 3 (App.jsx) before this one.
//
//  YOUR JOB: show how many items and how much they cost.
//
//  Props you get:   cart  → an array of the dishes added so far
//
//  Calculate the total — don't store it:
//
//    const total = cart.reduce((sum, item) => sum + item.price, 0);
//
//  `reduce` squashes a list into one value.
//  (map transforms · filter chooses · reduce squashes)
//
//  Then show nothing-yet vs the real footer:
//
//    if (cart.length === 0) {
//      return <p className="empty">Your cart is empty.</p>;
//    }
//
//    return (
//      <footer className="footer">
//        <span>{cart.length} items</span>
//        <strong>₹{total}</strong>
//      </footer>
//    );
//
//  ⚠ Do NOT add a second useState for the total. Two copies of the
//    same fact always drift apart. If you can calculate it, do.
//
//  ✅ DONE WHEN: the rupee total goes up as you add dishes, and it
//     says "empty" before you add anything.
//
//  Stuck? → solutions/finished/components/CartFooter.jsx
// ─────────────────────────────────────────────────────────────

export default function CartFooter({ cart }) {
  return (
    <footer className="footer">
      <span>TODO: count</span>
      <strong>₹0</strong>
    </footer>
  );
}
