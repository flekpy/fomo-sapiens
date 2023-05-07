import { FC, ReactNode, useContext, useEffect } from 'react'
import cn from 'classnames'

import ThemeContext, { ThemeContextProvider } from '@/context/ThemeContext'
import styles from './Layout.module.sass'
import Footer from './Footer/Footer'
import Header from './Header/Header'

interface IProps {
  children: ReactNode
}

const Layout = ({ children }: IProps) => {
  const { isDark } = useContext(ThemeContext)

  useEffect(() => {
    const theme = `theme--${isDark ? 'dark' : 'light'}`
    document.querySelector('html')!.className = theme
  }, [isDark])

  return (
    <div
      className={cn(
        styles.layoutContainer,
        isDark ? styles.dark : styles.light
      )}
    >
      <Header className={styles.header} />
      <main className={styles.layoutMain}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  )
}

export const withLayout = <T extends Record<string, unknown>>(
  Component: FC<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <ThemeContextProvider>
        <Layout>
          <Component {...props} />
        </Layout>
      </ThemeContextProvider>
    )
  }
}
