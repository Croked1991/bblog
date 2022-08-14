import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PostServise } from '../API/PostServise'
import { PostItemType } from '../Components/PostItem'
import { Loader } from '../Components/UI/Loader/Loader'
import { useFetch } from '../Hooks/useFetch'

type CommentType = {
    body: string
    email: string
    id: number
    name: string
    postId: number
}

export const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState<PostItemType>()
    const [comments, setComments] = useState<CommentType[]>([])
    const [fetchPostsById, isLoading, error] = useFetch(async () => {
        const response = await PostServise.getPost(params.id)
        setPost(response.data)
    })
    const [fetchCommentsById, isCommentsLoading, errorComments] = useFetch(async () => {
        const response = await PostServise.getComments(params.id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostsById()
        fetchCommentsById()
    }, [])

    return (
        <div style={{ margin: "2.5rem" }}>
            <div>
                {
                    isLoading
                        ? <Loader />
                        : <div>
                            <h3>{post?.title.toUpperCase()}</h3>
                            <div>{post?.body}</div>
                        </div>
                }
            </div>
            <div className='comments'>
                {
                    isCommentsLoading
                        ? <Loader />
                        : <div>
                            {comments.map(comment =>
                                <div style={{ marginTop: "2.5rem", border: "solid black 1px" }}>
                                    <h5>{comment.email}</h5>
                                    <div>{comment.body}</div>
                                </div>
                            )}
                        </div>
                }
            </div>
        </div>
    )
}

