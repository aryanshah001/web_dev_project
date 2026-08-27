import service from "../appwrite/config"
import { useEffect, useState } from "react"
import PostCard from "../Props/PostCard"

function Home() {
    const [post , setPost] = useState([])

    useEffect(() => {
        service.getPosts()
        .then((posts) => {
            if(posts){
                setPost(posts.documents)
            }
        })
    }, [])
  
    if(post.length === 0) {
        return (
            <div>login to read posts</div>
        )
    }
    else{
        return(
            <div>
                {
                    post.map((posts) => (
                        <div key={posts.$id}>
                            <PostCard post={posts} /> 
                             {/* OR <postcard {...posts} /> */}
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Home