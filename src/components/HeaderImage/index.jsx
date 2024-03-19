import React from 'react'
import styles from './index.module.scss'

export default function HeaderImage() {
  return (
    <div className={styles.root}>
      <div className="header_image">
        <h1 className="hero-heading">Towards Noise-tolerant</h1>
        <h1 className="hero-heading">Quantum Computing</h1>
      </div>
    </div>
  )
}
