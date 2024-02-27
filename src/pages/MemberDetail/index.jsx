import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Avatar, Col, Row } from 'antd'
import styles from './index.module.scss'
import {
  teacher,
  teacherZh,
  PhD,
  PhDZh,
  master,
  masterZh,
  Undergraduate,
  UndergraduateZh,
} from '../Team/teamData'
import { useLangStore } from '@/store/lang'

export default function MemberDetail() {
  const { lang } = useLangStore()

  const {
    state: { key, type },
  } = useLocation()
  // console.log(key, type, 9999)
  const titleZh = [
    '研究方向',
    '电子邮箱',
    '简历',
    '发表论文',
    '参加会议',
    '获奖情况',
    '敬请期待',
  ]
  const titleEn = [
    'Research Area',
    'Email',
    'Experiences',
    'Publications',
    'Meetings',
    'Awards',
    'Stay Tuned',
  ]
  const [title, setTitle] = useState([titleZh])
  const EN = [teacher, PhD, master, Undergraduate]
  const ZH = [teacherZh, PhDZh, masterZh, UndergraduateZh]
  const [meberLangType, setMeberLangType] = useState(ZH)
  let memberData = meberLangType[type].filter((item) => key == item.key)[0]
  const typeList = ['', 'Ph.D', 'Master', 'Undergraduate']
  console.log(memberData, 'memberData')
  useEffect(() => {
    window.scrollTo(0, 0)
    if (lang === 'zh') {
      setMeberLangType(ZH)
      setTitle(titleZh)
    } else {
      setMeberLangType(EN)
      setTitle(titleEn)
    }
  }, [lang])

  return (
    <div className={styles.root}>
      <div className="memberDetail_container">
        <div className="MemberDetail_content">
          <div className="MemberDetail_left">
            <img src={memberData?.photo} alt="avatar" className="avatar" />
          </div>
          <div className="MemberDetail_right">
            <div className="type">{typeList[type]}</div>
            <h1 className="member_name">{memberData?.name}</h1>
            <div className="introduce">{memberData?.backdrop}</div>
            <div className="">
              <span className="weight_title">{title[0]}:</span>
              {memberData.ResearchArea}
            </div>
            <div className="introduce">
              <span className="weight_title">{title[1]}:</span>
              {memberData.Email}
            </div>
            <div className="introduce">
              <span className="weight_title">{title[2]}:</span>
              <div className="Publications_content">
                {memberData.Experiences.map((item, index) => (
                  <div className="Publications_item" key={index}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="memberData_title">{title[3]}</div>
        <div className="Publications_content">
          {memberData.Publications.length > 0
            ? memberData.Publications.map((item, index) => (
                <div className="Publications_item" key={index}>
                  {index + 1}. {item}
                </div>
              ))
            : title[6]}
        </div>
        {memberData.more && (
          <div className="more_container">
            <div className="memberData_title">More papers are listed in </div>
            <div className="conten">
              <a
                href={memberData.more}
                target="_blank"
                style={{ color: '#000' }}
              >
                {memberData.more}
              </a>
            </div>
          </div>
        )}

        <div className="meetings_container">
          <div className="memberData_title">{title[4]}: </div>
          <div className="Meetings_content">
            {memberData.Meetings?.length > 0
              ? memberData.Meetings?.map((item, index) => (
                  <div className="Meetings_item" key={index}>
                    {item ? item : ''}
                  </div>
                ))
              : title[6]}
          </div>
        </div>

        <div className="memberData_title">{title[5]}: </div>
        <div className="Awards_content">
          {memberData.Awards.length > 0
            ? memberData.Awards.map((item, index) => (
                <div className="Meetings_item" key={index}>
                  {item}
                </div>
              ))
            : title[6]}
        </div>
      </div>
    </div>
  )
}
