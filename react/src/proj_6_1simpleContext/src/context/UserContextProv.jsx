import UserContext from "./UserContext";

const UsercontextProvider = ({children}) => {
    const User = {
        'userName' : 'ram',
        'age':'18'
    }
    return(
       
        <UserContext.Provider  value={User} >
            {children}
        </UserContext.Provider>

        
    )
}
export default UsercontextProvider