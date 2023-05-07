import { PostHeader } from './PostHeader/PostHeader'
import { IPost } from '@/interfaces/post.interface'
import { PostBody } from './PostBody/PostBody'
import styles from './Post.module.sass'

interface IProps {
  post: IPost
}

export const Post = ({ post }: IProps) => {
  return (
    <article className={styles.article}>
      <PostHeader
        date={post.date}
        title={post.title}
        author={post.author}
        coverImage={post.coverImage}
      />
      <PostBody content={post.content} />
    </article>
  )
}
