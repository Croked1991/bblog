import React, { useState, ChangeEvent, useEffect, useRef } from 'react';
import { PostItemType } from '.././Components/PostItem';
import ".././Styles/App.css"
import { PostForm } from '.././Components/PostForm';
import { PostsListsWithFilter } from '.././Components/PostsListsWithFilter';
import { Modal } from '.././Components/UI/Modal/Modal';
import { Button } from '.././Components/UI/button/Button';
import { useSearchedAndSortedPosts } from '.././Hooks/usePosts';
import { PostServise } from '.././API/PostServise';
import { Loader } from '.././Components/UI/Loader/Loader';
import { useFetch } from '.././Hooks/useFetch';
import { Pagination } from '.././Components/UI/pagination/Pagination';
import { getPagesCOunt } from '../utils/Pages';
import { useObserver } from '../Hooks/useObsetver';
import { MySelect } from '../Components/UI/select/Select';


export const Posts = () => {

  const [posts, setPosts] = useState([
    { id: 1, title: "On more title", body: "X" },
  ])

  const [filter, setFilter] = useState({ sortMethod: "", query: "" })
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const lastElement = useRef(null)

  const setLimitCB = (e:ChangeEvent<HTMLSelectElement>) => {
    setLimit(Number(e.currentTarget.value))
  }



  const [fetchPosts, isPostsLoading, postError] = useFetch(async () => {
    const response = await PostServise.getAll(limit, page)
    setPosts([...posts, ...response.data])
    const totalCount = Number(response.headers['x-total-count']);
    setTotalPages(getPagesCOunt(totalCount, limit))
  })


  const applyFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter({ ...filter, sortMethod: e.currentTarget.value })
  }

  const [switcher, setSwitcher] = useState(false)

  const changeSwitcher = () => {
    setSwitcher(!switcher)
  }

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(prev => prev + 1)
  })

  useEffect(() => {
    fetchPosts()
  }, [page, limit])

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

  const changePages = (page: number) => {
    setPage(page)
  }

  return (
    <div className="App">
      <div className='topPosts'>
      <Button callback={changeSwitcher}>New post</Button>
      <MySelect
        value={limit.toString()}
        callback={setLimitCB}
        defaultValue="How many show posts"
        options={[
          {value: '5', name: '5'},
          {value: '10', name: '10'},
          {value: '20', name: '20'},
          {value: '-1', name: 'All'},
        ]}
        mode="simple"
      />
      </div>
      <Modal
        switcher={switcher}
        changeSwitcher={changeSwitcher}
      >
        <PostForm
          createPosts={createPosts}
          posts={posts}
        />
      </Modal>
      
      {postError && <h1>Error: {postError}</h1>}
      {isPostsLoading &&
        <div style={{ "display": "flex", "justifyContent": "center", "marginTop": "200px" }}>
          <Loader />
        </div>}
      <PostsListsWithFilter
        filter={filter}
        applyFilter={applyFilter}
        applySearch={applySearch}
        sortedAndSearchedPosts={sortedAndSearchedPosts}
        removePost={removePost}
      />
      <div ref={lastElement} />
    </div>
  );
}


