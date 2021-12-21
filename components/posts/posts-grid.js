import PostItem from './post-item'
import style from './posts-grid.module.css'

const PostsGrid = ({posts}) => {
  return (
    <ul className={style.grid}>
      {posts.map(post => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  )
}

export default PostsGrid
