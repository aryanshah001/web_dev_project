import { useCallback } from "react"
import {useForm} from 'react-hook-form'
import {Button,Input,Select} from '../index'
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import service from "../../appwrite/config"

function PostForm({post}) {
    const navigate = useNavigate()
    const userData = useSelector(state => state.userData)

    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues:{
            title:post?. title || '',
            slug:post?. slug || '',
            content:post?. content || '',
            status:post?. status || 'active'

            // content:'',
            // tags:'',
            // status:'public',
            // cover:''
        },
    })

    const submit = async(data) => {
        if(post){
            const file = data.image[0]? await service.uploadFile(data.image[0]) : null

            if(file){
                service.deleteFile(post.featuredImage)
            }      
            const dbPost = await service.updatePost(post.$id,{
                    ...data,
                    featuredImage:file? file.$id :undefined,
            })
            if(dbPost){
                navigate(`/post/${dbPost.$id}`)
            }
        }   else{
            const file = await service.uploadFile(data.image[0])

            if(file){
                const fileId = file.$id
                data.featuredImage = fileId
               const dbPost = await service.createPost({
                    ...data,
                    userId:userData.$id
                })
                if(dbPost){
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }

    }
  return (
    <div>
        test
    </div>
  )
}

export default PostForm