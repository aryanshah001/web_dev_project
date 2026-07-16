import { useLoaderData } from "react-router-dom"

export const GithubLoader = async() => {
    const res = await fetch('https://api.github.com/users/hiteshchoudhary')
    return res.json()
}
function GithubLoad() {
    const data = useLoaderData()
    return(
        <>
         { data.followers}
        </>
      
    )
}
export default GithubLoad
