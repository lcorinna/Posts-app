import React, { useEffect, useState } from "react";
import PostList from "../Components/PostList";
import MyButton from "../Components/UI/button/MyButton";
import "../styles/App.css";
import PostForm from "../Components/PostForm";
import PostFilter from "../Components/PostFilter";
import MyModal from "../Components/UI/MyModal/MyModal";
import { usePosts } from "../hooks/usePost";
import PostService from "../API/PostService";
import Loader from "../Components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/page";
import Pagination from "../Components/UI/pagination/Pagination";

function Posts() {
  const [posts, setPosts] = useState([
    // {id: 1, title: "a", body: "c"},
  ]);

  const [filter, setFilter] = useState({sort: "", query: ""});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async() => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"]; 
    setTotalPages(getPageCount(totalCount, limit))
  });

  useEffect(() => {
    fetchPosts()
  }, [page])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
 
  //Получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
        Create user
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal> 
      <hr style={{margin: "15px 0"}} />
      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      />
      {postError &&
        <h1>Error: {postError}</h1>
      }
      {isPostsLoading
        ? <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}>
          <Loader/>
          </div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="List of posts" />
      }
      <Pagination 
        totalPages={totalPages} 
        page={page} 
        changePage={changePage}
      />
    </div>
  ); 
}

export default Posts;
 