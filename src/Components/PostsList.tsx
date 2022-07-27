import React, { ChangeEvent } from 'react'
import { PostItem, PostItemType } from './PostItem';
import { MySelect } from './UI/select/Select';

type PostsListType = {
    posts: PostItemType[],
    title: string,
    removePost: (currentPost: PostItemType) => void
    sorter: string
    sortPosts: (e:ChangeEvent<HTMLSelectElement>)=>void
    filterBySearchQuery: (e: React.ChangeEvent<HTMLInputElement>)=>void
    searchQuery: string
}

export const PostsList = (props: PostsListType) => {

    const mapPosts = props.posts.map((post, index) => <PostItem
        key={post.id}
        post={post}
        index={index + 1}
        removePost={props.removePost}
    />)


    return (
        <div className="App">
            <h1 style={{ textAlign: "center" }}>{props.title}</h1>
            <MySelect
                defaultValue={"Choose a sort type"}
                options={[
                    { value: "title", name: "By title" },
                    { value: "body", name: "By body" }
                ]}
                value={props.sorter}
                sortPosts={props.sortPosts}
                filterBySearchQuery={props.filterBySearchQuery}
                searchQuery={props.searchQuery}
            />
            {mapPosts}
        </div>
    )
}