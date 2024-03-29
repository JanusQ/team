import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import HeaderImage from '@/components/HeaderImage'
import '@/assets/styles/common.scss'
import { Select, Space, Row, Col } from 'antd'
import { useLangStore } from '@/store/lang'
import Title from '@/components/Title'
export default function News() {
  const { lang } = useLangStore()
  const [sort, setSort] = useState(1)
  const newToOldZh = [
    {
      time: '2022年7月',
      title: '天目1号”超导量子芯片应用成果重磅发布！',
      link: 'https://hic.zju.edu.cn/2022/0723/c56130a2605554/page.htm',
    },
    {
      time: '2021年12月',
      title: '浙江大学发布“莫干1号”“天目1号”超导量子芯片',
      link: 'https://hic.zju.edu.cn/2021/1220/c56173a2452801/page.htm',
    },
  ]
  const oldToNewZh = [
    {
      time: '2021年12月',
      title: '浙江大学发布“莫干1号”“天目1号”超导量子芯片',
      link: 'https://hic.zju.edu.cn/2021/1220/c56173a2452801/page.htm',
    },
    {
      time: '2022年7月',
      title: '天目1号”超导量子芯片应用成果重磅发布！',
      link: 'https://hic.zju.edu.cn/2022/0723/c56130a2605554/page.htm',
    },
  ]
  const newToOldEn = [
    {
      time: 'Jul 2022',
      type: 'Article',
      source: 'Source: China News Network',
      image: 'image',
      title:
        '“Tianmu 1” superconducting quantum chip application results released!',
      link: 'https://hic.zju.edu.cn/2022/0723/c56130a2605554/page.htm',
    },
    {
      time: 'Dec 2021',
      type: 'Article',
      source: 'Source: China News Network',
      image: 'image',
      title:
        'Zhejiang University released “Mogan 1” and “Tianmu 1” superconducting quantum chips',
      link: 'https://hic.zju.edu.cn/2021/1220/c56173a2452801/page.htm',
    },
  ]
  const oldToNewEn = [
    {
      time: 'Dec 2021',
      type: 'Article',
      source: 'Source: China News Network',
      image: 'image',
      title:
        'Zhejiang University released “Mogan 1” and “Tianmu 1” superconducting quantum chips',
      link: 'https://hic.zju.edu.cn/2021/1220/c56173a2452801/page.htm',
    },
    {
      time: 'Jul 2022',
      type: 'Article',
      source: 'Source: China News Network',
      image: 'image',
      title:
        '“Tianmu 1” superconducting quantum chip application results released!',
      link: 'https://hic.zju.edu.cn/2022/0723/c56130a2605554/page.htm',
    },
  ]

  const handleChange = (value) => {
    setSort(value)
    if (value && lang === 'zh') {
      setNewsList(oldToNewZh)
    }
    if (value && lang === 'en') {
      setNewsList(oldToNewEn)
    }
    if (!value && lang === 'en') {
      setNewsList(newToOldEn)
    }
    if (!value && lang === 'zh') {
      setNewsList(newToOldZh)
    }
  }
  // <Row justify={'center'}>
  //         <Col span={14}></Col>
  //       </Row>
  const [newsList, setNewsList] = useState(newToOldZh)
  useEffect(() => {
    if (sort && lang === 'zh') {
      setNewsList(oldToNewZh)
    }
    if (sort && lang === 'en') {
      setNewsList(oldToNewEn)
    }
    if (!sort && lang === 'en') {
      setNewsList(newToOldEn)
    }
    if (!sort && lang === 'zh') {
      setNewsList(newToOldZh)
    }
  }, [lang])
  return (
    <div className={styles.root}>
      <HeaderImage />
      <Row justify={'center'}>
        <Col span={15}>
          <div className="news">
            <Title titleText={'News'} />
            <Select
              defaultValue="Date(Newst to Oldest)"
              onChange={handleChange}
              style={{
                width: '100%',
                margin: '20px 0 30px 0',
              }}
              options={[
                {
                  value: 0,
                  label: 'Date(Newst to Oldest)',
                },
                {
                  value: 1,
                  label: 'Date(Oldest to  Newst )',
                },
              ]}
            />
            <ul className="news_content">
              {newsList.map((item, index) => (
                <li className="news_item" key={index}>
                  <div className="news_time">{item.time}</div>
                  <a
                    className="news_title_link"
                    href={item.link}
                    target="_blank"
                  >
                    <div className="news_title">{item.title}</div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  )
}
