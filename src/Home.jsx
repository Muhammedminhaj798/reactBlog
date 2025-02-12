import React from 'react'
import { Link } from 'react-router-dom'

const post = [
    {id:1, title:"react Basics",content:"React is javascript librar..."},
    {id:2, title:"react basics", content:"React Router helps with navigation"}
]


function Home() {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {post.map((post)=>(
            <li key={post.id}>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
