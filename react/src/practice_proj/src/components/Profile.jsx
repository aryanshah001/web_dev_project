import {  useContext } from "react"
import UserContext from "../context/context"

function Profile() {
    const {user} = useContext(UserContext)

    if(!user) return <div>plz login</div>
    return <div>welcome {user.username} </div>

}

export default Profile