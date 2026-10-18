import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addProducts } from "../store/prodSlice"
import { addToCart } from "../store/cartSlice"


function AddProducts() {
    const dispatch = useDispatch()

    const products = [
        {
            id:1,
            image:'https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name:'full coat',
            price:1001,
            stock:25,
            details:'cotton, full sleve, long, comfortable',
            category:'clothes'
        },
        {
            id:2,
            image:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name:'Andaa paneer',
            price:350,
            stock:55,
            details:'fully fresh non veg with paneer',
            category:'food'
        },
        {
            id:3,
            image:'https://media.istockphoto.com/id/471973362/photo/clothesline-and-laundry.jpg?s=2048x2048&w=is&k=20&c=KTymfV668vB44bNpP4fKIApVXPuQV-OLMOXhxoBTgM4=',
            name:'t-shirt',
            price:599,
            stock:14,
            details:'cotton, half-sleeve  pack of 4',
            category:'clothes'
        },
        {
            id:4,
            image:'https://images.unsplash.com/photo-1529338296731-c4280a44fc48?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name:'computer',
            price:25000,
            stock:5,
            details:'zebronics pc with keyboard and mouse',
            category:'electronics'
        } 
    ]

    useEffect(() => {
        products.map((items) => {
            dispatch(addProducts(items))
    })
    },[])


  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Our collection</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">Featured products</h1>
        </div>
        <p className="text-sm text-slate-500">Browse our latest picks for you.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((items) => (
          <article
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            key={items.id}
          >
            <div className="aspect-[4/3] overflow-hidden bg-slate-100">
              <img
                src={items.image}
                alt={items.name}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <div className="mb-3 flex items-start justify-between gap-3">
                <h2 className="text-lg font-semibold capitalize text-slate-900">{items.name}</h2>
                <span className="shrink-0 rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium capitalize text-indigo-700">
                  {items.category}
                </span>
              </div>
              <p className="min-h-10 text-sm leading-5 text-slate-600">{items.details}</p>
              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                <p className="text-lg font-bold text-slate-900">₹{items.price.toLocaleString("en-IN")}</p>
                <p className="text-xs font-medium text-slate-500">{items.stock} in stock</p>
              </div>
              <button
                type="button"
                onClick={() => dispatch(addToCart(items))}
                className="mt-4 w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200"
              >
                Add to cart
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AddProducts
