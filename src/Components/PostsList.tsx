import React, { ChangeEvent } from 'react'
import { PostItem, PostItemType } from './PostItem';
import { MySelect } from './UI/select/Select';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

type PostsListType = {
    posts: PostItemType[],
    title: string,
    removePost: (currentPost: PostItemType) => void
    sorter: string
    sortPosts: (e: ChangeEvent<HTMLSelectElement>) => void
    filterBySearchQuery: (e: React.ChangeEvent<HTMLInputElement>) => void
    searchQuery: string
}

export const PostsList = (props: PostsListType) => {
    const nodeRef = React.useRef(null)
    const mapPosts = <TransitionGroup>
        {props.posts.map((post, index) =>
            <CSSTransition ref={nodeRef}
                key={post.id}
                timeout={500}
                classNames="post">
                    <PostItem
                        post={post}
                        index={index + 1}
                        removePost={props.removePost}
                    />            
            </CSSTransition>)
        }
    </TransitionGroup>


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
                filterBySearchQuery={props.filterBySearchQuery}
                searchQuery={props.searchQuery}
                callback={(e)=>props.sortPosts(e)}
            />
            {mapPosts}
        </div>
    )
}