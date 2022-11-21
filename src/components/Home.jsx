import React from 'react'
import BlogList from './BlogList'
import useFetch from '../Hooks/useFetch'

const Home = () => {
  const {data: blogs, isPending } = useFetch('http://localhost:8000/blogs');

  return (
    <div className='home'>
      {isPending && <div><h3>Loading...</h3></div>}
      <BlogList blogs={blogs} title="All Blogs" />
    </div>
  )
}

export default Home