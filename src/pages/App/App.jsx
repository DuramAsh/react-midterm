import './App.css'
import Navbar from "../../components/Navbar";
import { useEffect, useState } from 'react';
import { PostsList } from '../../db/db'
import { Route, Routes, Link } from 'react-router-dom';
import PostDetails from '../PostDetails/PostDetails';

function App() {
  const [posts, setPosts] = useState(PostsList)
  const [newTitle, setNewTitle] = useState("")
  const [newDesc, setNewDesc] = useState("")

  const [filter, setFilter] = useState("")

  useEffect(() => {
    setPosts(PostsList.filter(post => post.title.toLowerCase().includes(filter.toLowerCase())))
  }, [filter])

  const createPost = (e) => {
    e.preventDefault()
    const post = {
      id: Math.floor(Math.random() * 1000),
      title: newTitle,
      description: newDesc,
      likes: 0
    };

    setPosts(old => [...old, post])
  }

  const postDetails = (id) => {
    return (
      <Routes>
        <Route path="posts">
          console.log(id)
          <Route path={id} element={<PostDetails id={id} />} />
        </Route>
      </Routes>
    )
  }

  // const likePost = (e, id) => {
  //   e.preventDefault()

  // }

  return (


    <div>
      <Navbar />

      <input type='text' placeholder='Поиск постов' value={filter} onChange={(e) => setFilter(e.target.value)}></input>

      <ul className={"postsList"}>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <h2>{post.likes}</h2>
            {/* <button onClick={(e) => likePost(e, post.id)}>Like</button> */}
            <Link to={"/posts/:id"}>
              <button onClick={() => postDetails(post.id)}>Подробнее</button>
            </Link>
          </li>
        ))}
      </ul>

      <form onSubmit={e => createPost(e)}>
        <input type="text" placeholder="Заголовок поста..." value={newTitle} onChange={(e) => setNewTitle(e.target.value)}></input>
        <input type="text" placeholder="Текст поста..." value={newDesc} onChange={(e) => setNewDesc(e.target.value)}></input>
        <button onClick={(e) => createPost(e)}>Создать пост</button>
      </form>
    </div>



  )
}

export default App
