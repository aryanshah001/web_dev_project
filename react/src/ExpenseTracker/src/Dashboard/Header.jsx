import { useNavigate } from "react-router-dom"

function Header() {
  const navigate = useNavigate()

   const navItems = [
        {
          name:'Home',
          slug:'/',
          
        },
        {
          name:'Income',
          slug:'/income',
          
        },
        {
          name:'Expense',
          slug:'/expense',
          
        }
      ]

  return (
    <div>

      <h1 className="bg-amber-400 text-2xl font-bold flex justify-center mb-4 py-3"> This is Header</h1>
      
      <div
      className="flex justify-end gap-4 mx-5"
      >
        {
        navItems.map((items) => (
          <div  
          key={items.name}>
            <button
            className="rounded-lg bg-pink-200 hover:bg-pink-600 text-black hover:text-white cursor-pointer px-2 py-1"
            onClick={() => navigate(items.slug)}
            >
              {items.name}
            </button>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Header