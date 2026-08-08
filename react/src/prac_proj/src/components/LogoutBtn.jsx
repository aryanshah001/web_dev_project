import {logout} from '../index'
import { authService } from '../auth/Auth'
import {useDispatch} from 'react-redux'
function LogoutBtn() {
  const dispatch = useDispatch()

  const handleButton = () => {
    authService.logout()
    .then(() => dispatch(logout()))
  }
  return (
    <button
    onClick={handleButton}
    type="button"
    >LogoutBtn</button>
  )
}

export default LogoutBtn