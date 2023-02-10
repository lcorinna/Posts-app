import React, { useRef, useState } from "react";
import ClassCounter from "./Components.js/ClassCounter";
import Counter from "./Components.js/Counter";
import PostItem from "./Components.js/PostItem";
import PostList from "./Components.js/PostList";
import MyButton from "./Components.js/UI/button/MyButton";
import "./styles/App.css";
import MyInput from "./Components.js/UI/input/MyInput";
import PostForm from "./Components.js/PostForm";
import MySelect from "./Components.js/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "a", body: "c"},
    {id: 2, title: "c 2", body: "b"},
    {id: 3, title: "b 3", body: "a"},
  ])

  const [selectSorted, setSelectSorted] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  function getSortedPosts() {
    console.log("delete me after")
    if(selectSorted) {
      return [...posts].sort((a, b) => a[selectSorted].localeCompare(b[selectSorted]));
    }
    return posts;
  }

  const sortedPosts = getSortedPosts(); 

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  //Получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectSorted(sort);
  }
 
  return (
    <div className="App">
      <PostForm create={createPost}/> 
      <hr style={{margin: "15px 0"}} />
      <div> 
        <MyInput 
          value={searchQuery}
          onChange={event => setSearchQuery(event.target.value)}
          placeholder="search..."
          type="text"
        />
        <MySelect
          value={selectSorted}
          onChange={sortPosts} 
          defaultValue="Sort"
          option={[
            {value: "title", name: 'by name'},
            {value: "body", name: 'by description'},
          ]}
          />
      </div>
      {posts.length !== 0 
        ? 
        <PostList remove={removePost} posts={sortedPosts} title="List of posts"></PostList>
        : 
        <h1 style={{textAlign: "center"}}>Posts not found</h1>
    }
    </div>
  ); 
}

export default App;
 