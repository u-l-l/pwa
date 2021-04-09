import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import EntityNav from '@/components/EntityNav';

import styles from '@/styles/Layout.module.scss';

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children }: Props) => (
  <div className={styles.container}>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className={styles.header}>
      <img src='/logo.svg' className={styles.logo}/>
      <h1>Ulala</h1>
    </header>
    <main className={styles.main}>
      <div className={styles.nav}>
        <EntityNav />
      </div>
      <div className={styles.content}>{children}</div>
    </main>
  </div>
)

export default Layout
