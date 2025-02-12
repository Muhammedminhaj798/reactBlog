import React from 'react'
import { useParams } from 'react-router-dom'

const posts = [
    {id:1, title: "React Basics", content:"React is a javascript..."},
    {id:2, title: "React Basics", content: "React Router helps with navigate"}
]

function BlogPost() {
    const {id} = useParams()
    const post = posts.find((p)=> p.id === Number(id))

    if (!post){
        return <h1>Post not found</h1>
    }
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}

export default BlogPost
