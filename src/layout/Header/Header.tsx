import {
  DetailedHTMLProps,
  HTMLAttributes,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useRouter } from 'next/router'
import cn from 'classnames'

import { BtnMenuAndClose, Logo, BtnChangeTheme, Navigation } from '@/components'
import ThemeContext from '@/context/ThemeContext'
import styles from './Header.module.sass'
import SideBar from '../SideBar/SideBar'
import { routing } from '../../lib/routing'

interface IProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Header = ({ className }: IProps) => {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false)
  const { isDark, toggleDark } = useContext(ThemeContext)
  const router = useRouter()

  useEffect(() => setSideBarOpen(false), [router])

  return (
    <header className={cn(className, styles.header)}>
      <div className={styles.logoWrapper}>
        <Logo />
        <BtnMenuAndClose
          onClick={() => setSideBarOpen(!sideBarOpen)}
          sideBarOpen={sideBarOpen}
          className={styles.btnHidden}
        />
      </div>
      <div className={styles.navWrapper}>
        <Navigation routing={routing} className={styles.navHidden} />
        <BtnChangeTheme
          onClick={toggleDark}
          icon={isDark ? 'MoonIcon' : 'SunIcon'}
          title={`Activate ${isDark ? 'dark' : 'light'} mode`}
          className={styles.btnPadding}
        />
      </div>
      <div
        className={cn(
          styles.mobileSideBar,
          sideBarOpen ? styles.sideBarOpen : ''
        )}
      >
        <SideBar />
      </div>
    </header>
  )
}

export default Header
