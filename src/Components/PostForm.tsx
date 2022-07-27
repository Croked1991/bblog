import React, { useState } from 'react'
import { PostItemType } from './PostItem'
import { Button } from './UI/button/Button'
import { Input } from './UI/input/Input'
import { TextArea } from './UI/TextArea/TextArea'

type PostFormType = {
    createPosts: (newPost: PostItemType) => void
    posts: PostItemType[]
}

export const PostForm = (props: PostFormType) => {

    //Создаю состояние для новых постов
    const [newPost, setNewPost] = useState({ title: "", body: "" })

    //Сетаю title в новый пост
    const setNewTitle = (inputEvent: React.ChangeEvent<HTMLInputElement>) => {
        setNewPost({...newPost, title: inputEvent.currentTarget.value})
    }

    //Сетаю body в новый пост
    const setNewBody = (inputEvent: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewPost({...newPost, body: inputEvent.currentTarget.value})
    }


    const addNewPost = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        props.createPosts({ ...newPost, id: Math.random() })
        setNewPost({ title: "", body: "" })
    }

    return (
        <form>
            <Input
                value={newPost.title}
                callback={setNewTitle}
                placeholder={"Input the title"}
            />
            <TextArea
                placeholder={"Input the text"}
                value={newPost}
                callback={setNewBody}
            />
            <Button callback={(e) => addNewPost(e)}>Add new post</Button>
        </form>
    )
}