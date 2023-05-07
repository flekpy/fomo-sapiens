import { IPost } from '@/interfaces/post.interface'
import { getAllPosts } from '@/lib/api'
import { PostList } from '@/components'

interface IProps {
  allPosts: IPost[]
}

export default function Index({ allPosts }: IProps) {
  return (
    <div>
      {allPosts.length ? (
        <PostList posts={allPosts} />
      ) : (
        <h3>coming soon...</h3>
      )}
    </div>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'content',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
