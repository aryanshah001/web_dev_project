import { useContext } from 'react'
import UserContext from '../context/userContext'

function Profile() {

    const {user} = useContext(UserContext)

    if(!user) return <div>plz Login</div>
    return <div> welcome {user.username} </div>


}

export default Profile