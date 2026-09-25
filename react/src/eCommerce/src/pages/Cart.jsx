import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../store/cartSlice";

const formatPrice = (price) => `₹${price.toLocaleString("en-IN")}`;

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main className="mx-auto min-h-[60vh] max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Your order</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">Shopping cart</h1>
      </div>

      {items.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-14 text-center">
          <p className="text-lg font-semibold text-slate-800">Your cart is empty</p>
          <p className="mt-2 text-sm text-slate-500">Add a few products and they’ll show up here.</p>
          <Link to="/products" className="mt-6 inline-flex rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700">
            Browse products
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="space-y-4">
            {items.map((item) => (
              <article key={item.id} className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center">
                <img src={item.image} alt={item.name} className="h-28 w-full rounded-xl bg-slate-100 object-cover sm:w-36" />
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium uppercase tracking-wide text-indigo-600">{item.category}</p>
                  <h2 className="mt-1 text-lg font-semibold capitalize text-slate-900">{item.name}</h2>
                  <p className="mt-1 text-sm text-slate-500">{formatPrice(item.price)} each</p>
                </div>
                <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                  <div className="flex items-center rounded-lg border border-slate-300">
                    <button type="button" aria-label={`Decrease ${item.name} quantity`} onClick={() => dispatch(decreaseQuantity(item.id))} className="px-3 py-2 text-slate-700 hover:bg-slate-100">−</button>
                    <span className="min-w-9 text-center text-sm font-semibold text-slate-900">{item.quantity}</span>
                    <button type="button" aria-label={`Increase ${item.name} quantity`} disabled={item.quantity >= item.stock} onClick={() => dispatch(increaseQuantity(item.id))} className="px-3 py-2 text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40">+</button>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-slate-900">{formatPrice(item.price * item.quantity)}</p>
                    <button type="button" onClick={() => dispatch(removeFromCart(item.id))} className="mt-1 text-xs font-medium text-rose-600 hover:text-rose-700 hover:underline">Remove</button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-lg font-semibold text-slate-900">Order summary</h2>
            <div className="mt-5 flex justify-between text-sm text-slate-600">
              <span>Items ({itemCount})</span>
              <span>{formatPrice(total)}</span>
            </div>
            <div className="mt-4 flex justify-between border-t border-slate-200 pt-4 text-base font-bold text-slate-900">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
            <p className="mt-2 text-xs text-slate-500">Shipping and taxes are calculated at checkout.</p>
            <Link to="/products" className="mt-6 block rounded-lg bg-indigo-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-indigo-700">
              Continue shopping
            </Link>
          </aside>
        </div>
      )}
    </main>
  );
}

export default Cart;
