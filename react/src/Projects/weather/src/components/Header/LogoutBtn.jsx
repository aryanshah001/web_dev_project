import { useDispatch } from "react-redux"
import authService from '../../../../../proj_9_megaProject/src/appwrite/auth'
import { logout } from "../../store/authSlice"

function LogoutBtn() {

    const dispatch = useDispatch()

    const LogoutHandler = () => {
        authService.logout()
        .then(() => dispatch(logout()))
    }
  return (
    <div>
        <button onClick={LogoutHandler}>Logout</button>
    </div>
  )
}

export default LogoutBtn