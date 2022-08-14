import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from './UI/button/Button';

export type PostItemType = {
    id: number;
    title: string;
    body: string;
    userId?: number,
}



export type PostItemComponentType = {
    post: PostItemType
    removePost: (currentPost: PostItemType) => void
    index: number
}


export const PostItem = (props: PostItemComponentType) => {

    const navigate = useNavigate()

    return (
        <div className="posts">
            <div className="postContent">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="postBtnsArea">
                <div className="postBtns">
                    <Button callback={() => navigate(`./${props.post.id}`, {replace: true})}>Open</Button>
                </div>
                <div className="postBtns">
                    <Button callback={() => props.removePost(props.post)}>Delete</Button>
                </div>
            </div>
        </div>
    )
}