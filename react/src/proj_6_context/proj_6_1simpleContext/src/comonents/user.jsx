import { useContext } from "react"
import UserContext from "../context/UserContext"

function User() {
    const user1 = useContext(UserContext)
  return (
    <div className="text-3xl font-bold">
        this is {user1.userName} and age is {user1.age}
    </div>
  )
}

export default User