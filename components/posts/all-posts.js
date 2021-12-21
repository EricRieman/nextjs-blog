import PostsGrid from './posts-grid'
import style from './all-posts.module.css'

const AllPosts = ({posts}) => {
  return (
    <section className={style.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts}/>
    </section>
  )
}

export default AllPosts
