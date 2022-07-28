import React, { useMemo, useState, ChangeEvent } from 'react';
import { PostItemType } from './Components/PostItem';
import { PostsList } from './Components/PostsList';
import "./Styles/App.css"
import { PostForm } from './Components/PostForm';
import { Input } from './Components/UI/input/Input';
import { PostsListsWithFilter } from './Components/PostsListsWithFilter';
import { Modal } from './Components/UI/Modal/Modal';
import { Button } from './Components/UI/button/Button';
import { useSearchedAndSortedPosts } from './Hooks/usePosts';


function App() {

  const [posts, setPosts] = useState([
    { id: 3, title: "Some title", body: "Z" },
    { id: 2, title: "Not some title", body: "Y" },
    { id: 1, title: "On more title", body: "X" }
  ])

  const [filter, setFilter] = useState({ sortMethod: "", query: "" })

  const applyFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter({ ...filter, sortMethod: e.currentTarget.value })
  }

  const [switcher, setSwitcher] = useState(false)
  const changeSwitcher = () => {
    
    setSwitcher(!switcher)
  }

  const applySearch = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, query: e.currentTarget.value })
  }

  const sortedAndSearchedPosts = useSearchedAndSortedPosts(posts,filter.sortMethod,filter.query)

  const createPosts = (newPost: PostItemType) => {
    setPosts([newPost, ...posts])
    setSwitcher(false)
  }

  const removePost = (currentPost: PostItemType) => {
    setPosts(posts.filter(p => p.id !== currentPost.id))
  }

  return (
    <div className="App">
      <Button callback={changeSwitcher}>New post</Button>
      <Modal 
        switcher={switcher}
        changeSwitcher={changeSwitcher}
      >
        <PostForm
          createPosts={createPosts}
          posts={posts}
        />
      </Modal>
      <PostsListsWithFilter
        filter={filter}
        applyFilter={applyFilter}
        applySearch={applySearch}
        sortedAndSearchedPosts={sortedAndSearchedPosts}
        removePost={removePost}
      />

    </div>
  );
}

export default App;
