import {Link} from 'react-router-dom'
import service from '../appwrite/config'

function PostCard({
    $id,
    title,
    featuredImage
}) {
  return (
    <Link
    to={`/post/${$id}`}
    >
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div>
            <img src={service.getFilePreview(featuredImage)} alt='img' />
        </div>

        <h2>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard