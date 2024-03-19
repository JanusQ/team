import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'
import HeaderImage from '@/components/HeaderImage'
import { Divider, Avatar } from 'antd'
import '@/assets/styles/common.scss'
import Teacher from './component/Teacher'
import Student from './component/Student'
import Title from '@/components/Title'
import { Row, Col } from 'antd'
import {
  teacher,
  teacherZh,
  PhD,
  PhDZh,
  master,
  masterZh,
  Undergraduate,
  UndergraduateZh,
} from './teamData.jsx'
import { useLangStore } from '@/store/lang'

export default function Team() {
  const { lang } = useLangStore()

  const EN = [teacher, PhD, master, Undergraduate]
  const ZH = [teacherZh, PhDZh, masterZh, UndergraduateZh]
  const [showData, setshowData] = useState(ZH)
  useEffect(() => {
    if (lang === 'zh') {
      setshowData(ZH)
    } else {
      setshowData(EN)
    }
  }, [lang])
  // 获取上次滚动位置并将页面滚动到该位置
  window.onload = function () {
    const scrollPosition = sessionStorage.getItem('scrollPosition')
    if (scrollPosition) {
      window.scrollTo(0, scrollPosition)
    }
  }

  // 存储当前滚动位置
  window.addEventListener('beforeunload', function () {
    sessionStorage.setItem('scrollPosition', window.pageYOffset)
  })

  return (
    <div className={styles.root}>
      <Row justify={'center'}>
        <Col span={15}>
          <div className="team_container">
            <Title titleText={'Principle Investigator'} />
            {showData[0].map((item, index) => (
              <Teacher teacherData={item} key={index} type={0} />
            ))}
            <div className="margin" style={{ height: 114 }}></div>
            <Title titleText={'Team Members'} style={{ marginTop: 30 }} />

            <div className="member_type_phd">Ph.D</div>
            <div className="member_content">
              {showData[1].map((item, index) => (
                <Link
                  to="/memberDetail"
                  state={{ key: item.key, type: 1 }}
                  key={index}
                >
                  <div className="item_content">
                    <Student studentData={item} type={1} key={index} />
                  </div>
                </Link>
              ))}
            </div>
            <div className="member_type_phd">Master</div>
            <div className="member_content">
              {showData[2].map((item, index) => (
                <Link
                  to="/memberDetail"
                  state={{ key: item.key, type: 2 }}
                  key={index}
                >
                  <div className="item_content">
                    <Student studentData={item} type={2} key={index} />
                  </div>
                </Link>
              ))}
            </div>
            <div className="member_type_phd">Undergraduate</div>
            <div className="member_content">
              {showData[3].map((item, index) => (
                <Link
                  to="/memberDetail"
                  state={{ key: item.key, type: 3 }}
                  key={index}
                >
                  <div className="item_content">
                    <Student studentData={item} type={3} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
