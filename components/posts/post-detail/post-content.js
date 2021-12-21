import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter'
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'
import PostHeader from "./post-header"
import style from './post-content.module.css'

SyntaxHighlighter.registerLanguage('js', js, 'css', css);

const PostContent = ({post}) => {
const imagePath = `/images/posts/${post.slug}/${post.image}`

const customComponents = { 
  img: (image) => <Image src={`/images/posts/${post.slug}/${image.src}`} alt={image.alt} width={600} height={300}/>,
  code: (code) => <SyntaxHighlighter language='js' children={code.children} style={atomDark}/>
}

  return (
    <article className={style.content}>
      <PostHeader title={post.title} image={imagePath}/>
      <ReactMarkdown components={customComponents}>{post.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent
