import styles from './PostBody.module.sass'

interface IProps {
  content: string
}

export const PostBody = ({ content }: IProps) => {
  return (
    <div
      className={styles['markdown']}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
