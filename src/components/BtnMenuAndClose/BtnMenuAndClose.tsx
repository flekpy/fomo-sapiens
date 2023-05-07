import { DetailedHTMLProps, HTMLAttributes } from 'react'
import cn from 'classnames'

import styles from './BtnMenuAndClose.module.sass'

interface IBtnProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  sideBarOpen: boolean
}

export const BtnMenuAndClose = ({
  className,
  sideBarOpen,
  ...props
}: IBtnProps) => {
  return (
    <div className={cn(className, styles.plates)} {...props}>
      <svg aria-hidden={true}>
        <defs>
          <filter id="gooeyness">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="2.2"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="gooeyness"
            />
            <feComposite in="SourceGraphic" in2="gooeyness" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div
        className={cn(
          styles.plate,
          styles.plate6,
          sideBarOpen ? styles.active : ''
        )}
      >
        <svg
          className={cn(styles.burger)}
          version="1.1"
          height="100"
          width="100"
          viewBox="0 0 100 100"
        >
          <path
            className={cn(styles.line, styles.line1)}
            d="M 50,35 H 30 M 50,35 H 70 V 38 H 30 V 41 H 70"
          />
          <path
            className={cn(styles.line, styles.line2)}
            d="M 50,50 H 30 V 47 H 70 V 44 H 30"
          />
          <path
            className={cn(styles.line, styles.line3)}
            d="M 50,50 H 70 V 53 H 30 V 56 H 70"
          />
          <path
            // stroke={stroke}
            className={cn(styles.line, styles.line4)}
            d="M 50,65 H 70 M 50,65 H 30 V 62 H 70 V 59 H 30"
          />
        </svg>
        <svg
          className={cn(styles.x)}
          version="1.1"
          height="100"
          width="100"
          viewBox="0 0 100 100"
        >
          <path className={cn(styles.line)} d="M 34,32 L 66,68" />
          <path className={cn(styles.line)} d="M 66,32 L 34,68" />
        </svg>
      </div>
    </div>
  )
}
