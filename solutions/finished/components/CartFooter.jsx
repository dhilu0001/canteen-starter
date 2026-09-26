// FILE 4 — finished
export default function CartFooter({ cart }) {
  // Calculated, never stored.
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return <p className="empty">Your cart is empty. Add something.</p>;
  }

  return (
    <footer className="footer">
      <span>{cart.length} item{cart.length === 1 ? '' : 's'}</span>
      <strong>₹{total}</strong>
    </footer>
  );
}
