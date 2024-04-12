import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import { UnorderedListOutlined } from '@ant-design/icons'
import styles from './index.module.scss'
import { Row, Col } from 'antd'

export default function AchievementDetail() {
  const {
    state: { detail },
  } = useLocation()
  const navigate = useNavigate()
  // console.log(detail, 99)
  let member = [
    'Jianwei Yin',
    'Liqiang Lu',
    'Siwei Tan',
    'Tingting Li',
    'Chenning Tao',
    'Wuwei Tian',
    'Hanyu Zhang',
    'Wuwei Tian',
    'Xinghui Jia',
    'Congliang Lang',
    'Jia Yu',
    'Yifan Guo',
    'Shiyu Li',
    'Tianze Zhu',
    'Tianyao Chu',
    'Qifan Jiang',
    'Li Hengyi',
    'Debin Xiang',
    'Kaiwen Zhou',
    'Fangxu Guo',
  ]
  let showmember = detail.author.filter((memberName) =>
    member.includes(memberName)
  )
  const toMemberDetail = (name) => {
    if (name == 'Jianwei Yin' || name == 'Liqiang Lu') {
      navigate('/teacherDetail', { state: { key: name, type: 0 } })
    } else if (
      name == 'Siwei Tan' ||
      name == 'Tingting Li' ||
      name == 'Chenning Tao' ||
      name == 'Wuwei Tian' ||
      name == 'Hanyu Zhang'
    ) {
      navigate('/memberDetail', { state: { key: name, type: 1 } })
    } else {
      navigate('/memberDetail', { state: { key: name, type: 2 } })
    }
  }
  return (
    <div className={styles.root}>
      <Row justify={'center'}>
        <Col span={15}>
          <div className="AchievementDetail_container">
            <div className="paper_title_content">
              <h1>{detail.title}</h1>
              <div className="author">{detail.author.join(',')}</div>
            </div>
            <div className="paper_button">
              <a target="_blank" href={detail.link}>
                <UnorderedListOutlined style={{ marginRight: 10 }} />
                Paper
              </a>
            </div>
            <h2 className="Abstract">Abstract</h2>
            <div className="Abstract_content">{detail.Abstract}</div>
            <h2 className="Team_embers">Team Members</h2>
            <div className="member">
              {showmember.map((item, index) => (
                <Button
                  size="large"
                  type="text"
                  style={{
                    marginRight: 20,
                    marginTop: 20,
                    backgroundColor: 'rgb(0, 63, 136)',
                    color: '#fff',
                  }}
                  key={index}
                  onClick={() => toMemberDetail(item)}
                >
                  &nbsp; &nbsp; {item} &nbsp; &nbsp;
                </Button>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
