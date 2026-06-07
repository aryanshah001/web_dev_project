import { useEffect , useState } from "react"


function Github(){
    let[data , setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then((res) => res.json())
        .then((data) => setData(data))
    } , [])

    return(
        <>
            <div 
            className="bg-gray-600 text-3xl text-white text-center py-3"
            >
                github follower : {data.followers}
                <img src={data.avatar_url} alt="Git picture" 
                className="h-48 mx-auto"
                />
            </div>
        </>
    )
}
export default Github