import { useNavigate } from "react-router-dom";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const products = useSelector((state) => state.products.products);
  const cartCount = useSelector((state) => state.cart.items.reduce((count, item) => count + item.quantity, 0));

  // remove duplicate values. This is for adding dropdown in filter near searchbar
  const filterSearch = [...new Set(products.map((items) => items.category))];

  const navItems = [
    {
      name: "Products",
      slug: "/products",
    },
    {
      name:'Login',
      slug:'/login'
    },
    {
      name:'Signup',
      slug:'/signup'
    },
    {
      name: "Cart",
      slug: "/cart",
    }
  ];
  return (
    <header className="border-b border-gray-700 bg-gray-800 text-gray-100 shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/019/136/319/small/amazon-logo-amazon-icon-free-free-vector.jpg"
            alt="Amazon logo"
            width={100}
            className="h-12 w-24 shrink-0 rounded-lg object-cover"
          />

          <div className="flex min-w-0 flex-1 items-center gap-2">
            <select
              aria-label="Filter by category"
              className="h-11 w-20 shrink-0 rounded-lg border border-gray-600 bg-gray-700 px-2 text-sm text-gray-100 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30 sm:w-28 sm:px-3"
            >
              <option value="">All</option>
              {filterSearch.map((items) => (
                <option key={items} value={items}>
                  {items}
                </option>
              ))}
            </select>

            <div className="relative min-w-0 flex-1">
              <input
                type="search"
                name="search"
                id="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
                className="h-11 w-full rounded-lg border border-gray-600 bg-gray-700 pl-10 pr-3 text-sm text-gray-100 outline-none transition placeholder:text-gray-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30"
              />
              <FiSearch
                aria-hidden="true"
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-300"
                size={20}
              />
            </div>

            <select
              aria-label="Language"
              className="h-11 w-24 shrink-0 rounded-lg border border-gray-600 bg-gray-700 px-2 text-xs text-gray-100 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30 sm:w-28 sm:px-3 sm:text-sm"
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="nep">Nepali</option>
            </select>
          </div>
          </div>

      <nav aria-label="Main navigation" className="flex flex-wrap justify-center gap-2 sm:justify-end">
        {navItems.map((item) => (
          <button
            key={item.name}
            type="button"
            className="rounded-lg border border-indigo-500 bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:border-indigo-400 hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-400/40"
            onClick={() => navigate(item.slug)}
          >
            {item.name === "Cart" ? (
              <span className="inline-flex items-center gap-2">
                <FiShoppingCart aria-hidden="true" size={17} />
                Cart
                <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs">{cartCount}</span>
              </span>
            ) : item.name}
          </button>
        ))}
      </nav>
      </div>
    </header>
  );
}

export default Header;
