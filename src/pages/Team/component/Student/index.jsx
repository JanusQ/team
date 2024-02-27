import React from 'react'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { Avatar, Divider } from 'antd'
export default function Student({ studentData, type }) {
  return (
    <div className={styles.root}>
      <div className="student_container">
        <div className="student_container_left">
          {/* <Link to="/memberDetail" state={{ key: studentData.key, type }}> */}

          <img src={studentData.photo} alt="avatar" className="avatar" />
          {/* </Link> */}
        </div>
        <div className="student_container_right">
          <div className="student_name">{studentData.name}</div>
          <div className="grad">
            {studentData.backdrop.substring(studentData.backdrop.length - 10)}
          </div>
        </div>
      </div>
    </div>
  )
}
