import Image from 'next/image'
import { PostCard, Categories, PostWidget } from '@/components'
import { getPosts } from '../services'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// const posts = [
//   { title: 'React Testing', excerpt: 'Learn React Testing' },
//   {
//     title: 'React Testing with Tailwind',
//     excerpt: 'Learn React Taiwind Testing',
//   },
// ]

export default function Home({ posts }) {
  return (
    <main className="container mx-auto px-10 mb-8  bg-gray-300">
      {/* <Head>
        <title>AB Blog</title>
        <link rel="stylesheet" href="" />
      </Head> */}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { posts },
  }
}
