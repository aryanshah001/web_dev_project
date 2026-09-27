import { useEffect, useState } from "react"


function Api4() {
    const [data, setData] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading]= useState(true)

    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then((res) => {
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

    }, [])

  return loading ? <p>Loading ...</p> : (
    <>
        <p>{error?.error}</p>
        <p> Total = {data?.total}</p>
        <p> category = {data?.products?.[0]['category']}</p>
        <p> price = Rs{data?.products?.[0]['price']}</p>
    </>
  )
}

export default Api4