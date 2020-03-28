import React from 'react'
import { Link } from 'react-router-dom'
import PostList from '../../components/Product/List'

const PagesPostsIndex = () => (
  <div>
    <Link to="/products/new">
      <button type="button">Create Post</button>
    </Link>
    <PostList />
  </div>
)

export default PagesPostsIndex
