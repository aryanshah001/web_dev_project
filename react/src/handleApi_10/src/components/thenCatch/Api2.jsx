// SIMPLE API HANDLING WITH ERROR AND LOADING.

import { useEffect, useState } from "react"

function Api2({username}) {

    const [data,setData] = useState({})
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then(res => {
            if(!res.ok){
                throw new Error('user not found')
            }
            return res.json()
        })
        .then(data => setData(data))

        .catch(error => {
            setError(error.message)
        })

        .finally(() => setLoading(false))

    }, [username])
    
    return loading ? <p> Loading ...</p> : (
        <>
            <p>{error?.error }</p>

            <p>Follower = {data.followers}</p>
        </>
    )
}

export default Api2 