import Link from 'next/link'
import cn from 'classnames'

import styles from './Logo.module.sass'
import { ShitIcon } from './ShitIcon'

export const Logo = () => {
  return (
    <Link href="/" className={cn(styles.logoWrapper)}>
      <div className={cn(styles.logoIconWrapper)}>
        <ShitIcon />
      </div>
      <span className={styles.logoText}>
        fomo <br /> sapiens
      </span>
    </Link>
  )
}
