import {useState} from 'react';
import styles from '@/styles/RoomNav.module.scss'

export default function RoomNav() {
  const [openDoc, setOpenDoc] = useState(true);
  const [openChat, setOpenChat] = useState(true);
  const [openVoiceChat, setOpenVoiceChat] = useState(true);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        README
      </div>
      <div className={`${styles.category} ${openDoc ? styles.open : ''}`}>
        <div className={styles.summary} onClick={() => setOpenDoc(prev => !prev)}>
          <span className={`${openDoc ? styles.open : styles.closed}`}></span>
          ドキュメント
        </div>
        <div className={styles.list}></div>
      </div>
      <div className={`${styles.category} ${openChat ? styles.open : ''}`}>
        <div className={styles.summary} onClick={() => setOpenChat(prev => !prev)}>
          <span className={`${openChat ? styles.open : styles.closed}`}></span>
          チャット
        </div>
        <div className={styles.list}></div>
      </div>
      <div className={`${styles.category} ${openVoiceChat ? styles.open : ''}`}>
        <div className={styles.summary} onClick={() => setOpenVoiceChat(prev => !prev)}>
          <span className={`${openVoiceChat ? styles.open : styles.closed}`}></span>
          ボイスチャット
        </div>
        <div className={styles.list}></div>
      </div>
    </div>
  )
}
