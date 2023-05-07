import { HTMLAttributes, DetailedHTMLProps } from 'react'
import cn from 'classnames'

import styles from './BtnChangeTheme.module.sass'
import MoonIcon from './MoonIcon'
import SunIcon from './SunIcon'

const icons = {
  MoonIcon,
  SunIcon,
}

type IconName = keyof typeof icons

export interface IButtonIconProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: IconName
}

export const BtnChangeTheme = ({
  className,
  icon,
  ...props
}: IButtonIconProps) => {
  const IconComp = icons[icon]

  return (
    <button {...props} className={cn(styles.button, className)} type="button">
      <IconComp />
    </button>
  )
}
