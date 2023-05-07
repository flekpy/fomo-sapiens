import { PostPreview } from '../PostPreview/PostPreview'
import { IPost } from '@/interfaces/post.interface'
import styles from './PostList.module.sass'

interface IProps {
  posts: IPost[]
}

export const PostList = ({ posts }: IProps) => {
  return (
    <section>
      <div className={styles.wrapperGrid}>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            date={post.date}
            slug={post.slug}
            title={post.title}
            author={post.author}
            excerpt={post.excerpt}
            coverImage={post.coverImage}
          />
        ))}
      </div>
    </section>
  )
}
