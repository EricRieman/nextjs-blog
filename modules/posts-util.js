import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'posts' )

export const getPostFiles = () => {
  return fs.readdirSync(postsDir)
}

export const getPostData = (postId) => {
  const postSlug = postId.replace(/\.md$/, '') // remove file extension, if loading from filename
  const filePath = path.join(postsDir, `${postSlug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const {data, content} = matter(fileContent) // extract md variables (gray matter)

  const postData = {
    slug: postSlug,
    ...data,
    content: content
  }

  return postData
}

export const getAllPosts = () => {
  const postFiles = getPostFiles()

  const allPosts = postFiles.map( postFile => {
    return getPostData(postFile )
  })

  // sort by newest date
  return allPosts.sort((a, b) => a.date > b.date ? -1: 1 )
}

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts()
  return allPosts.filter(post => post.isFeatured)
}