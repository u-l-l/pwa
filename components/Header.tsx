import styles from '@/styles/Header.module.scss';

type Props = {
  name: string
}

export default function Header({ name }: Props) {
  return (
    <div className={styles.container}>
      <h3 className={styles.name}>{ name }</h3>
    </div>
  )
}
