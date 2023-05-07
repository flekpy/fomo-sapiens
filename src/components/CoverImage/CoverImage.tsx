import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'

import styles from './CoverImage.module.sass'

interface IProps {
  src: string
  title: string
  slug?: string
}

export const CoverImage = ({ title, src, slug }: IProps) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn(styles.img)}
      width={1300}
      height={630}
    />
  )
  return (
    <div className={styles.imgWrapper}>
      {slug ? (
        <Link
          as={`/projects/${slug}`}
          href="/projects/[slug]"
          aria-label={title}
        >
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
