import Head from 'next/head'
import PostContent from '../../components/posts/post-detail/post-content'
import {getPostData, getPostFiles} from '../../modules/posts-util'

const PostDetailPage = ({postData}) => {
  return <>
    <Head>
      <title>{postData.title}</title>
      <meta name='description' content={postData.excerpt} />
    </Head>
    <PostContent post={postData}/>
  </>
}

export const getStaticPaths = () => {
  const fileNames = getPostFiles()

  const slugs = fileNames.map(fileName => fileName.replace(/\.md$/, ''))

  return {
    paths: slugs.map(slug => ({params: {slug}})),
    fallback: false
  }
}

export const getStaticProps = (context) => {
  const postData = getPostData(context.params.slug)

  return {
    props: {postData},
    revalidate: 600
  }
}

export default PostDetailPage
