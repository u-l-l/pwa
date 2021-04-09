import React from 'react';
import styles from '@/styles/NavItem.module.scss';

type Props = {
  name: string,
  icon: string,
  active: boolean,
  onClick: (e: React.MouseEvent) => void
}

export default function NavItem({ name, icon, active, onClick}: Props) {
  return (
    <div className={`${styles.container} ${active ? styles.active : ''}`} onClick={onClick}>
      <div className={styles.icon}>
        <img src={icon} />
      </div>
      <div className={styles.name}>{ name }</div>
    </div>
  )
}
