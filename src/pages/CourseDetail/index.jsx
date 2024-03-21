import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Avatar } from 'antd'
import { Divider, List, Typography } from 'antd'
import styles from './index.module.scss'
import { useLangStore } from '@/store/lang'
import { Row, Col } from 'antd'
import Title from '@/components/Title'
export default function CourseDetail() {
  const { lang } = useLangStore()

  const {
    state: { courseData },
  } = useLocation()
  console.log(courseData)
  const titleListZh = [
    '开课学期: ',
    '上课地点: ',
    '上课时间: ',
    '课程类型: ',
    '学时: ',
    '学分: ',
    '主讲教师: ',
    '课程大纲: ',
    '参考书: ',
  ]
  const titleListEn = [
    'Semester: ',
    'Location: ',
    'Time: ',
    'Course Type: ',
    'Study Hours: ',
    'Credits: ',
    'Lecturers: ',
    'Course syllabus: ',
    'Reference books: ',
  ]
  const [titleList, settitleList] = useState(titleListZh)
  useEffect(() => {
    if (lang === 'zh') {
      settitleList(titleListZh)
    } else {
      settitleList(titleListEn)
    }
  }, [lang])

  return (
    <div className={styles.root}>
      <Row justify={'center'}>
        <Col span={15}>
          <div className="course_detail_container">
            <div className="course_intorduce">
              <Title titleText={courseData.title} />
              <div className="course_intro">{courseData.intro}</div>
              <Divider style={{ margin: '30px 0' }} />
              <div className="course_text">
                <span className="big_weight_text">{titleList[0]}</span>
                {courseData.time}
              </div>
              <div className="course_text">
                <span className="big_weight_text">{titleList[1]}</span>
                {courseData.place}
              </div>
              <div className="course_text">
                <span className="big_weight_text">{titleList[2]}</span>
                {courseData.classTime}
              </div>
              <div className="course_type course_text">
                <span className="big_weight_text">{titleList[3]}</span>
                {courseData.type}
              </div>
              <div className="course_type course_text">
                <span className="big_weight_text">{titleList[4]}</span>
                {courseData.Classhour}
              </div>
              <div className="course_type course_text">
                <span className="big_weight_text">{titleList[5]}</span>
                {courseData.Credithour}
              </div>
              <div className="teacher_content">
                <span className="big_weight_text">
                  {courseData.Instructor}:
                </span>
                <div className="teacher_item_content">
                  {courseData.teacher.map((item1, index) => (
                    <div key={index} className="teacher_item">
                      <div className="teacher_photo">
                        <Avatar
                          size={80}
                          src={<img src={item1.photo} alt="avatar" />}
                        />
                      </div>
                      <div className="teacher_name">
                        <div className="name">{item1.name}</div>
                        <div className="Investigator_text">
                          Principle Investigator
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <List
              header={
                <div style={{ fontFamily: 'PingFang-SC-Bold' }}>
                  {titleList[7]}
                </div>
              }
              bordered
              dataSource={Array.from(courseData.outline)}
              renderItem={(item) => (
                <List.Item style={{ fontFamily: 'PingFang-SC-Regular' }}>
                  <Typography.Text mark></Typography.Text> {item}
                </List.Item>
              )}
            />
            {/* {
          courseData.outline.map((item,index)=>((
            <div className="course_outLine" key={index}>
              {item}
            </div>

          )))
        } */}
            <div className="course_book">{courseData.book}</div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
