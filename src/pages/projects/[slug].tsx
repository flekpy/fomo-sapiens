import { getAllPosts, getPostBySlug } from '@/lib/api'
import { IPost } from '@/interfaces/post.interface'
import markdownToHtml from '@/lib/markdownToHtml'
import { Post } from '@/components'

interface IPostProps {
  post: IPost
  morePosts?: IPost[]
  preview?: boolean
}

export default function PostPage({ post }: IPostProps) {
  return (
    <div>
      <Post post={post} />
    </div>
  )
}

interface IParams {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: IParams) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
