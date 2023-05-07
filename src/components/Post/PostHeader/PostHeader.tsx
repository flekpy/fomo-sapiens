import { IAuthor } from '@/interfaces/post.interface'
import styles from './PostHeader.module.sass'
import { CoverImage } from '@/components'

interface IProps {
  title: string
  date?: string
  author?: IAuthor
  coverImage: string
}

export const PostHeader = ({ title, coverImage }: IProps) => {
  return (
    <>
      <h1 className={styles.h1}>{title}</h1>
      <CoverImage title={title} src={coverImage} />
    </>
  )
}
