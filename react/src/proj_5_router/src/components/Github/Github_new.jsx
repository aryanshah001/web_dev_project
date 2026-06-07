import {useLoaderData} from 'react-router-dom'
function GithubNew(){
    const data = useLoaderData()
    return(
        <>
            Github Follower = {data.followers}
        </>
    )
}
export default  GithubNew

export const GithubLoader = async() => {
    const res = await fetch('https://api.github.com/users/aryanshah001')
    return res.json()
}