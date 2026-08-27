import { useEffect,useState} from "react"
import {Container,PostForm} from '../components'
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import service from "../appwrite/config"

function EditPost() {
const [post, setPost] = useState(null)
const navigate = useNavigate()
const {slug} = useParams()

useEffect(() => {
    if(slug){
        service.getPost(slug)
        .then((posts) => {
            if(posts){
                setPost(posts)
            }else{
                navigate('/')
            }
        })
    }
},[slug,navigate])

  return post ? (
    <div
    className="py-8"
    >
        <Container>
            <PostForm post={post} />
        </Container>
    </div>  
  ): null
}

export default EditPost