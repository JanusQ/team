import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Avatar, Col, Row } from 'antd'
import styles from './index.module.scss'
import image from '@/assets/image/TeacherDetail/bg.jpg'
import Title from '@/components/Title'
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
  const titleZh = ['介绍', '相关演讲', '发表论文', '科研项目', '期刊']
  const titleEn = [
    'Introduction',
    'Related speech',
    'Published paper',
    'Research project',
    'Journal',
  ]
  const [title, setTitle] = useState([titleZh])
  const titleZh1 = ['办公地址', '研究方向', '电子邮箱', '个人主页']
  const titleEn1 = ['Address', 'Research Area', 'Email', 'Personal Homepage']
  const [title1, setTitle1] = useState(titleZh1)
  const {
    state: { key, type },
  } = useLocation()
  // console.log(key, type, 9999)
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
      setTitle1(titleZh1)
    } else {
      setMeberLangType(EN)
      setTitle(titleEn)
      setTitle1(titleEn1)
    }
  }, [lang])

  return (
    <div className={styles.root}>
      <div className="teacherDetail_top">
        <div className="avatar_content">
          <Avatar size={235} src={memberData.photo} />
        </div>
        <div className="name">{memberData.name}</div>
        <div className="backdrop">{memberData.backdrop}</div>
      </div>
      <Row justify={'center'}>
        <Col span={15}>
          {' '}
          <div className="teacherDetail_container">
            <div className="introduce_content">
              <div className="introduce">
                <span className="weight_title">{title1[0]}:</span>
                {memberData.Address}
              </div>
              <div className="introduce">
                <span className="weight_title">{title1[1]}:</span>
                {memberData.ResearchArea}
              </div>
              <div className="introduce">
                <span className="weight_title">{title1[2]}:</span>
                {memberData.Email}
              </div>
              <div className="introduce">
                <span className="weight_title">{title1[3]}:</span>
                <a
                  href={memberData.Personalhomepage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {memberData.Personalhomepage}
                </a>
              </div>
            </div>

            <div className="about_title big_title">{title[0]}</div>
            <div className="about">{memberData.about}</div>
            {memberData?.lecture?.length > 0 && (
              <div className="lecture_container">
                <div className="lecture_title title_text">{title[1]}</div>
                <div className="lecture_content">
                  {memberData?.lecture?.map((item, index) => (
                    <div className="lecture_item content_item" key={index}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {memberData?.Publications?.length > 0 && (
              <div className="Publications_container">
                <div className="Publications_title title_text">{title[2]}</div>
                <div className="Publications_content">
                  {memberData.Publications?.map((item, index) => (
                    <div className="Publications_item content_item" key={index}>
                      {item}
                    </div>
                  ))}
                  {memberData.DBLP && (
                    <div
                      className="DBLP"
                      style={{ fontSize: '15px', fontWeight: 600 }}
                    >
                      DBLP:
                      <a
                        style={{ color: '#000', fontSize: 14 }}
                        href={memberData.DBLP}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {memberData.DBLP}
                      </a>
                    </div>
                  )}
                  {memberData.GoogleScholar && (
                    <div
                      className="GoogleScholar"
                      style={{ fontSize: '15px', fontWeight: 600 }}
                    >
                      Google Scholar:
                      <a
                        style={{ color: '#000', fontSize: 14 }}
                        href={memberData.GoogleScholar}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {memberData.GoogleScholar}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}

            {memberData?.project?.length > 0 && (
              <div className="project_container">
                <div className="project_title title_text">{title[3]}</div>
                <div className="project_content">
                  {memberData.project?.map((item, index) => (
                    <div className="project_item content_item" key={index}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {memberData?.periodical?.length > 0 && (
              <div className="periodical_contenter">
                <div className="periodical_title title_text">{title[4]}</div>
                {memberData.periodical?.map((item, index) => (
                  <div className="Publications_item content_item" key={index}>
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        </Col>
      </Row>
    </div>
  )
}
