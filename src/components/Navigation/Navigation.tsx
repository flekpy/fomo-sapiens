import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'classnames'

import styles from './Navigation.module.sass'
import { IMenu } from '../../lib/routing'

interface IProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  routing: IMenu[]
}

export const Navigation = ({ className, routing }: IProps) => {
  const router = useRouter()

  return (
    <nav className={cn(styles.nav, className)}>
      <ul className={styles.ul}>
        {routing?.map((route) => (
          <li
            key={route.id}
            className={cn(styles.li, {
              [styles.liActive]: `${route.href}` === router.asPath,
            })}
          >
            <Link href={route.href}>{route.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
