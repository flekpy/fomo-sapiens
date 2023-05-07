import Link from 'next/link'

import { CoverImage } from '@/components/CoverImage/CoverImage'
import { IAuthor } from '@/interfaces/post.interface'

interface IProps {
  slug: string
  title: string
  date?: string
  excerpt: string
  author?: IAuthor
  coverImage: string
}

export const PostPreview = ({ title, coverImage, excerpt, slug }: IProps) => {
  return (
    <div>
      <h3>
        <Link href={`/projects/${slug}`}>{title}</Link>
      </h3>
      <CoverImage title={title} src={coverImage} slug={slug} />
      <p>{excerpt}</p>
    </div>
  )
}
