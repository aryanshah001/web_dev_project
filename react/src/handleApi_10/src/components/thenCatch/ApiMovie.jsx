// MOVIES API HANDLED IN anchor Tag TO NAVIGATE.

import { useState } from "react"

function ApiMovie() {

    const [data,setData ] = useState([])
    const [error, setError] = useState(null)
    const [loading,setLoading] = useState(true)

    fetch('https://dummyjson.com/products')
    .then(res => {
        if(!res.ok){
            throw new Error('not found')
        }
        return res.json()
    })

    .then(data => setData(data))
    .catch(error => {
        setError(error.message)
    })
    .finally(() => setLoading(false))

  return (
    <div>
        {!loading ? (
            <>
                <p> {error?.error} </p>
                
                {data?.map((items,index) => ( 
                    <a 
                    key={items.id}
                    href={items.url}
                    target="_blank"
                    >
                      Movie {index+1}=   {items['name']}  <br />
                    </a> 
                ))}
            </>
            
        ) : <p>loading...</p>}
    </div>
  )
}

export default ApiMovie