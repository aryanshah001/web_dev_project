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
      className="flex justify-center gap-4"
      >
        {
        navItems.map((items) => (
          <div  
          key={items.name}>
            <button
            className="px-2 bg-pink-500 hover:bg-amber-600 text-black hover:text-white cursor-pointer"
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