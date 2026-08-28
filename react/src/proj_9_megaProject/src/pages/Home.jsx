import service from "../appwrite/config"
import { useEffect, useState } from "react"
import PostCard from "../Props/PostCard"
import { useSelector } from "react-redux"

function Home() {
    const [post , setPost] = useState([])
    const authStatus = useSelector(state => state.status)

    useEffect(() => {
        service.getPosts()
        .then((posts) => {
            if(posts){
                setPost(posts.documents)
            }
        })
    }, [])

    if(authStatus === false){
        return <div>plz login</div>
    }
  
    else if(post.length === 0) {
        return (
            <div>zero posts</div>
        )
    }
    else{
        return(
            <div>
                {
                    post.map((posts) => (
                        <div key={posts.$id}>
                            <PostCard {...posts} /> 
                             {/* OR <postcard {...posts} /> */}
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Home