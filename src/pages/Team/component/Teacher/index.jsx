import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { Avatar, Divider } from 'antd'
import { useLangStore } from '@/store/lang'

export default function Teacher({ teacherData, type }) {
  // console.log(teacherData, 669)
  const { lang } = useLangStore()

  const titleZh = ['办公地址', '研究方向', '电子邮箱', '个人主页']
  const titleEn = ['Address', 'Research Area', 'Email', 'Personal homepage']
  const [title, setTitle] = useState(titleZh)
  useEffect(() => {
    if (lang === 'zh') {
      setTitle(titleZh)
    } else {
      setTitle(titleEn)
    }
  }, [lang])

  return (
    <div className={styles.root}>
      <div className="team_content">
        <div className="team_content_top">
          <Link
            to="/teacherDetail"
            className="avatar"
            state={{ key: teacherData.key, type }}
          >
            <img src={teacherData.photo} alt="avatar" />
          </Link>
          <div className="top_right">
            <h4 className="name">{teacherData.name}</h4>
            <div className="introduce">{teacherData?.backdrop}</div>
          </div>
        </div>
        <div className="team_content_bottom">
          <div className="Introduction">Introduction:</div>
          {/* <div className="introduce">
            <span className="weight_title">{title[0]}:</span>
            {teacherData.Address}
          </div>
          <div className="introduce">
            <span className="weight_title">{title[1]}:</span>
            {teacherData.ResearchArea}
          </div>
          <div className="introduce">
            <span className="weight_title">{title[2]}:</span>
            {teacherData.Email}
          </div>
          <div className="introduce">
            <span className="weight_title">{title[3]}:</span>
            <a
              href={teacherData.Personalhomepage}
              target="_blank"
              rel="noopener noreferrer"
            >
              {teacherData.Personalhomepage}
            </a>
          </div> */}
          <div className="introduce">{teacherData.about}</div>
        </div>
      </div>
      <Divider />
    </div>
  )
}
