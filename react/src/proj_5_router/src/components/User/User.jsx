import { useParams } from "react-router-dom"
function User() {
    const {userid} = useParams()
  return (
    <div 
    className=" bg-gray-400 text-white h-12 flex justify-center text-2xl items-center "
    >
        User : {userid}
    </div>
  )
}
export default User


