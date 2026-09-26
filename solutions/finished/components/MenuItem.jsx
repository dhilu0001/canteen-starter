// FILE 1 — finished
export default function MenuItem({ item, onAdd }) {
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
