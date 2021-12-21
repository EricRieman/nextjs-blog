import PostsGrid from '../posts/posts-grid'
import style from './featured-posts.module.css'

const FeaturedPosts = ({posts}) => {
  return (
    <section className={style.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts}/>
    </section>
  )
}

export default FeaturedPosts
