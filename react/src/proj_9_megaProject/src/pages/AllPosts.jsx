import { useEffect, useState } from "react"
import service from "../appwrite/config"
import Container from '../components/Container'

function AllPosts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    service.getPosts()
    .then((post) => {
      if(post){
        setPosts(post.documents)
      }
    })
  }, [])
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {
          posts.map((post) => (
            <div 
            className="p-2 w-1/4"
            key={post.$id}>
              <postCard post={post}/>
            </div>
          ))
        }
        </div>
        
      </Container>
    </div>
  )
}

export default AllPosts