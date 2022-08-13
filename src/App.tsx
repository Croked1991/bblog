import React, { useMemo, useState, ChangeEvent, useEffect } from 'react';
import { PostItemType } from './Components/PostItem';
import { PostsList } from './Components/PostsList';
import "./Styles/App.css"
import { PostForm } from './Components/PostForm';
import { Input } from './Components/UI/input/Input';
import { PostsListsWithFilter } from './Components/PostsListsWithFilter';
import { Modal } from './Components/UI/Modal/Modal';
import { Button } from './Components/UI/button/Button';
import { useSearchedAndSortedPosts } from './Hooks/usePosts';
import { PostServise } from './API/PostServise';
import { Loader } from './Components/UI/Loader/Loader';
import { useFetch } from './Hooks/useFetch';
import { getPagesArray, getPagesCOunt } from './utils/pages';
import { useMemoArray } from './Hooks/useMemoArray';
import { Pagination } from './Components/UI/pagination/Pagination';


function App() {

  const [posts, setPosts] = useState([
    { id: 3, title: "Some title", body: "Z" },
    { id: 2, title: "Not some title", body: "Y" },
    { id: 1, title: "On more title", body: "X" }
  ])

  const [filter, setFilter] = useState({ sortMethod: "", query: "" })
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)



  const [fetchPosts, isPostsLoading, postError] = useFetch(async () => {
    const response = await PostServise.getAll(limit, page)
    setPosts(response.data)
    const totalCount = Number(response.headers['x-total-count']);
    setTotalPages(getPagesCOunt(totalCount, limit))
  })

  console.log(totalPages)

  const applyFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter({ ...filter, sortMethod: e.currentTarget.value })
  }

  const [switcher, setSwitcher] = useState(false)

  const changeSwitcher = () => {
    setSwitcher(!switcher)
  }


  useEffect(() => {
    fetchPosts()
  }, [page])

  const applySearch = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, query: e.currentTarget.value })
  }

  const sortedAndSearchedPosts = useSearchedAndSortedPosts(posts, filter.sortMethod, filter.query)

  const createPosts = (newPost: PostItemType) => {
    setPosts([newPost, ...posts])
    setSwitcher(false)
  }

  const removePost = (currentPost: PostItemType) => {
    setPosts(posts.filter(p => p.id !== currentPost.id))
  }

  const changePages = (page:number) => {
    setPage(page)
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
      {postError ?
        <h1>Error: {postError}</h1> :
        isPostsLoading ?
          <div style={{ "display": "flex", "justifyContent": "center", "marginTop": "200px" }}>
            <Loader />
          </div> :
          <PostsListsWithFilter
            filter={filter}
            applyFilter={applyFilter}
            applySearch={applySearch}
            sortedAndSearchedPosts={sortedAndSearchedPosts}
            removePost={removePost}
          />
      }
    <Pagination
      totalPages={totalPages} 
      page={page} 
      changePages={changePages}
    />
    </div>
  );
}

export default App;
