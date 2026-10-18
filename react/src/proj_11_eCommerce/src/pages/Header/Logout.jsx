import authService from "../../appwrite/auth"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logout } from "../../store/authSlice"

function Logout() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandler = async () => {
        try {
            await authService.logout();
            dispatch(logout());
            navigate('/login');
        } catch (error) {
            console.error('Logout failed', error);
        }
    }

  return (
    <div>
        <button 
        onClick={logoutHandler}
        className="px-3 py-2 bg-blue-700 rounded-lg">Logout</button>
    </div>
  )
}

export default Logout
