import React, { ChangeEvent } from 'react'
import { PostItemType } from './PostItem'
import { PostsList } from './PostsList'
import { Input } from './UI/input/Input'


type PostsListsWithFilterType = {
    filter: {
        sortMethod: string, 
        query: string
    },
    applyFilter: (e: ChangeEvent<HTMLSelectElement>)=>void,
    sortedAndSearchedPosts: PostItemType[],
    removePost: (currentPost: PostItemType)=>void,
    applySearch: (e: ChangeEvent<HTMLInputElement>)=>void

}

export const PostsListsWithFilter = (props: PostsListsWithFilterType) => {



    return (
            props.sortedAndSearchedPosts.length 
        ?
        <PostsList
            posts={props.sortedAndSearchedPosts}
            title={"Posts list"}
            removePost={props.removePost}
            sorter={props.filter.sortMethod}
            sortPosts={props.applyFilter}
            filterBySearchQuery={props.applySearch}
            searchQuery={props.filter.query}
        /> 
        :
        <div className="secondSearch">
            <h1 style={{ textAlign: "center" }}>
            Posts is not found
            </h1>
            <div className="inputUnderSearch">
            <Input
                autofocus={true} 
                style={{ "minWidth": "9.3rem", "alignItems": "flex-end" }} 
                placeholder={"Try again"} value={props.filter.query} 
                callback={props.applySearch} 
            />
            </div>
        </div>

    )
}