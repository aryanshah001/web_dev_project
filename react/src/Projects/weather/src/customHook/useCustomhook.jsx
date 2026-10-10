import { useEffect, useState } from "react"

function useCustomhook() {
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(null)
  const [data,setData] = useState({})

  useEffect(() => {
    const getData = async() => {
      try {
        const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=ahmedabad&appid=9fe26bff63a3c5f54abbb5320535775b')
      if(!res.ok){
        throw new Error('data loading failed')
      }
      const data = await res.json()
      setData(data)
      } catch (error) {
        setError(error.message)
      }
      finally{
        setLoading(false)
      }
    }
    getData()
  }, [])

  return {
    loading,error,data
  }
}

export default useCustomhook