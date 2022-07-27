import React, { useState } from 'react'
import { Button } from './UI/button/Button';

export type PostItemType = {
    id: number;
    title: string;
    body: string;
}

export type PostItemComponentType =  {
    post: PostItemType
    removePost: (currentPost: PostItemType) => void
    index: number
}
    

export const PostItem = (props: PostItemComponentType) => {

 
    return (
            <div className="posts">
                <div className="postContent">
                    <strong>{props.index}. {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                    <div className="postBtns">
                        <Button callback={()=>props.removePost(props.post)}>Delete</Button>
                    </div>
            </div>
    )
}