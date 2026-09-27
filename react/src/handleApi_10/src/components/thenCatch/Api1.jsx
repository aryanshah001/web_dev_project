// Simple Api handling

import { useEffect, useState } from "react"

function Api1() {
    const [data,setData] = useState({})

    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(res => res.json())
        .then(data => setData(data))
        
    }, [])
  return (
    <div>
       follower =  {data?.followers}
    </div>
  )
}

export default Api1