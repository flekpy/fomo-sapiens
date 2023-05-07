import ManIcon from './ManIcon'
import styles from './Sponsor.module.sass'

export const Sponsor = () => {
  return (
    <div className={styles.sponsorWrapper}>
      <ManIcon />
      <span className={styles.span}>
        проект поддерживается и спонсируется, абсолютно никем
      </span>
    </div>
  )
}
