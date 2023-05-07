import { DetailedHTMLProps, HTMLAttributes } from 'react'
import cn from 'classnames'

import { HeartIcon } from '@/components'
import styles from './Footer.module.sass'

interface IFooterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Footer = ({ className }: IFooterProps) => {
  return (
    <footer className={cn(className, styles.footer)}>
      <p className={styles.p}>
        made with
        <span className={styles.span}>
          <HeartIcon />
        </span>
      </p>
    </footer>
  )
}

export default Footer
