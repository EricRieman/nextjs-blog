# Building a nextjs app from scratch

## Define page routes
Typically, we begin by defining all the pages by building the appropriate folder/file structure in the pages folder. When applying dyncamic routes, it is better to pass in 'human readable' route paths inseat of id numbers for SEO. Becasue of this, we jsut just a default name liike [slug].

## The home page
Now that pages are defined, we can add content to each page. We can begin with the home page, but it depends on your application. On the top of the home page, below the nav bar, is called the hero section. This is like a welcome section, where we present our main product. The next section is typically a features section, were we give more details about the product/services offered.

Page components should be kept lean from jsx code. They should focus on data fetching and pre-rendering, and return a high-level component(s), which are defined in the /components folder (outside of /pages).

## Layout
Now is a good time to add a layout, which are the components that are displayed on every page of you site, like the navbar. This could also be done before making the the home page, but sometimes its nice to get the homepage idea out, and build around it, its up to you. 

## Pages and components
Build the rest of the front end of your app. Start with the lop level of each page, and build all components for each. Add context only if nessesary. Consider not connecting to a database and instead, just use dummy data as a placeholder to build around. Do not worry about next's pre-rendering yet, but understand the data you will be fetching to build an appropiate dummmy data file/array/object.

## API and database
Define all the routes needed for your api, build the api route folder/file structure of both static and dynamic routes. Define all data that needs stored, a schema for the database and api routes.

Depending on the needs of your site, you may not even need a database, but instead, could put all the nessesary data in files. This is common for site that does not have frequently changing data, like profile sites. Typically, all those files are stored in a /content folder in the root of your project.

## Hookup front-end and back-end
Now that your database and routes are defined, we can hook them up to our UI. This should be straight forward, as we design the backend for the UI. Though, there may have been limitations with what you could complete in the frontend without a real backend. If that is the case, now is the time to finsish all those loose ends and test your code.

Put together all data validation on both client and server. If possible, use a shared module to validate on both sides. Ensure the client reacts appropriately for every sucess or error response. 

## Pre-generation
This could be done during the previous step, where we hook up the backend to the api. Doing so saves us the extra step of setting up a fetch in the component instead of doing it in getStaticProps or getServerSideProps.

We can now optimize how our pages are generated using next. Think carfully about each page, what data it is using, if its static or dynamic, and what for of pre-generation is required. In most cases, you want to use getStaticProps for staic pages, and pair it with getStaticPaths for dynamic pages. If the pages need re-built, use the revalidate key to specify a time interval. If 1 second is not fast enough, or there other other, more complicated reasons, then use getServerSideProps, but it should be a last resort.

## SEO Optimizations
At this point, our app should be mostly complete, now we want to add some finishing touches to give our nextjs app better SEO. We can begin by adding meta tags to the Head component as a sibling to other page component(s). Define the title and meta (name/description/viewport/favicon) ,at the very least, on all pages. Even dynamic pages, remember, the Head component has access to that dynamic data. We should also add a _document.js file to override nextjs's default root html document. This is commonly used to configure the lang attribute, which ensures all pages are in the same language, without having to configure each Head component. It is also common practice to use the _document file to define react portals, if (for example) a nestest modal should be rendered along-side the page's root component. 

# Notes on ReactMarkdown
react-markdown is a package we can use to translate markdown text into a react component. It essentially converts the md syntax into html. This is useful for blog posts because the post can be written on an md file, then read (like in getStaticProps), then use react-markdown to add to the site.

There are customizations we can make to the component to take advantage of other nextjs features. If your md file contains an image, we can overwrite how it is rendered to use a next image. On the ReactMarkdown component, we pass in the components property with an object which defines how certain elements can be rendered. You can come up with your own elements, but there are also built in components, and you can override the default. You can review them [here](https://github.com/remarkjs/react-markdown#syntax) In the example below, a markdown string in stored in posts.content, which contains an image, which is a file in our public/posts folder. We also pass in a renderes object, where we are overwriting the built in image component by passing in an object with an img property, set to an arrow function. That function should return the component we want to render, instead of an img element.
```js
import ReactMarkdown from 'react-markdown'
...

const customComponents = { 
  img: (image) => <Image src={`/images/posts/${post.slug}/${image.src}`} alt={image.alt} width={600} height={300}/>
}
...

<ReactMarkdown components={customComponents}>{post.content}</ReactMarkdown>
```

Another common example is code snippets, in the example below, we overrite the ReactMarkdown's code component with our own. For better code styling, we can install another package called ```react-syntax-highlighter```. Yo ucan review all the different options [here](https://github.com/react-syntax-highlighter/react-syntax-highlighter). In this example, we will go with the prisim styling options and the atomDark theme
```js
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {atomDark} from 'react-syntax-highlighter/dist/sjs/styles/prism'
...

const customComponents = { 
  code: (code) => <SyntaxHighlighter language='js' children={code.children} style={atomDark}/>
}
...

<ReactMarkdown components={customComponents}>{post.content}</ReactMarkdown>
```