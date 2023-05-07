import { DetailedHTMLProps, HTMLAttributes } from 'react'
import cn from 'classnames'

import { routing } from '@/lib/routing'
import { Navigation } from '@/components'
import styles from './SideBar.module.sass'

interface IProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const SideBar = ({ className }: IProps) => {
  return (
    <aside className={cn(className, styles.sidebar)}>
      <Navigation routing={routing} />
    </aside>
  )
}

export default SideBar
