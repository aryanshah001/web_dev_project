import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

function Header() {

  const authStatus = useSelector((state) => state.status)
  const navigate = useNavigate()

   const navItems = [
          {
            name:'login',
            slug:'/login',
            active:!authStatus
          },
          {
            name:'Home',
            slug:'/home',
            active:authStatus
          },

          {
            name:'Signup',
            slug:'/signup',
            active:!authStatus
          }
          
        ]
  return (
    <div>
       {
        navItems.map((data) => (
          data.active? (
            <button
            onClick={() => navigate(data.slug)}
            key={data.name}
            >
              {data.name}
            </button>
          ):(null)
        ))
       }

       {authStatus && <li>LogoutBtn</li>}
    </div>
  )
}

export default Header