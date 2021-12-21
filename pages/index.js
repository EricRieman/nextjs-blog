import Head from "next/head"
import FeaturedPosts from "../components/home-page/featured-posts"
import Hero from "../components/home-page/hero"
import {getFeaturedPosts} from '../modules/posts-util'

const HomePage = ({posts}) => {
  return (
    <>
      <Head>
        <title>Max's Blog</title>
        <meta name='description' content='I post about programming and web dev'/>
      </Head>
      <Hero />
      <FeaturedPosts posts={posts}/>
    </>
  )
}

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts()
  return {props:{posts: featuredPosts}};
}

export default HomePage
