import { useEffect, useState } from "react"


function Api1() {

    const[data ,setData] = useState({})
    const[error , setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const handleApi = async() => {
       try {
         const res = await fetch('https://api.github.com/users/hiteshchoudhary')
        if(!res.ok){
            throw new Error('user not found')
        }
        const data = await res.json()
        setData(data)

       } catch (error) {
           console.log(error);
           setError(error.message)
        
       }
       finally{
        setLoading(false)
       }

    }

    useEffect(() => {
        handleApi()
    }, [])

  return (
    <>
    {
       
        loading ? (<p>Loading...</p>) : (
            <>
                <p>{error?.error}</p>
                <p>Follower = {data.followers} </p>
                <p>blog = {data.blog} </p>
            </>
        )
       
    }</>
)
}

export default Api1