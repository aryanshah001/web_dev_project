// import { useEffect, useState } from "react"

import { useLoaderData } from "react-router-dom"

function Github() {
  const data = useLoaderData()
//     let [data , setData] = useState([])

//     useEffect(() => {
//         fetch('https://api.github.com/users/hiteshchoudhary')
//         .then((res) => res.json())
//         .then((data) => setData(data))
    // } , [])
  return (
    <>
        Github Follower = {data.followers}
    </>
  )
}

export default Github

export const  GithubInfoLoader = async () => {
 const response = await fetch('https://api.github.com/users/hiteshchoudhary')
 return response.json()
}