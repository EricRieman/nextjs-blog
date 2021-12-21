import Head from 'next/head'
import AllPosts from '../../components/posts/all-posts'
import { getAllPosts } from '../../modules/posts-util'


const AllPostsPage = ({posts}) => {
  return <>
    <Head>
      <title>All posts</title>
      <meta name='description' content='A list of programming-related posts' />
    </Head>
    <AllPosts posts={posts}/>
  </>

  
}

export const getStaticProps = () => {
  const posts = getAllPosts()
  return {props: {posts}}
}

export default AllPostsPage
