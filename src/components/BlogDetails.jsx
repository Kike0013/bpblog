import { useParams, useNavigate } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'
import React from 'react'

const BlogDetails = () => {

  const { id } = useParams()
  const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`);
  const history = useNavigate()

  const handleClick = () => {
    fetch(`http://localhost:8000/blogs/${blog.id}`, {
      method: 'DELETE'
    }).then(() => {
      history.push('/')
    })
  }

  return (
    <div className='blog-details'>
       {error && <div>{error}</div>}
      {isPending && <div><h3>Loading...</h3></div>}
      <article>
        <h2>{blog.title}</h2>
        <p>Written by {blog.author}</p>
        <div>{blog.body}</div>
        <button onClick={handleClick}>Delete</button>
      </article>
    </div>
  )
}

export default BlogDetails