import React from 'react'
import styles from './index.module.scss'
export default function Title({ titleText }) {
  return <div className={styles.root}>{titleText}</div>
}
