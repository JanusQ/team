import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
import logo from '@/assets/logo_wite.png'
import { useLangStore } from '@/store/lang'
import { Button, Row, Col } from 'antd'
export default function Header({ menus }) {
  const { lang, toEn, toZh } = useLangStore()
  const location = useLocation()
  const navigate = useNavigate()
  const changeLanguage = () => {
    if (lang == 'en') {
      toZh()
    } else {
      toEn()
    }
    // navigate('/home')
  }
  useEffect(() => {
    // const userLanguage = navigator.language || navigator.userLanguage
    // if (userLanguage == 'zh-CN') {
    //   toZh()
    // } else {
    //   toEn()
    // }
    toEn()
  }, [])

  return (
    <div className={styles.root}>
      <ul className="menu_content">
        <Row justify="center" className="headerContent" align="middle">
          <Col span={15}>
            <Row justify="space-between">
              <Col className="logo_content" lg={4} md={5} sm={24} xs={24}>
                <li className="logo">
                  <Link to="/home">
                    <img className="logo" src={logo} alt="" />
                  </Link>
                </li>
                <Link to="/home">
                  <li className="myname">Taiyuan</li>
                </Link>
              </Col>
              <Col className="menuContent" lg={20} md={19} sm={0} xs={0}>
                {menus.map(({ label, path }) => (
                  <Link key={path} style={{ color: '#fff' }} to={path}>
                    <li className="menu_item">
                      <div className="lable"> {label}</div>
                      <div
                        className={
                          location.pathname === path
                            ? 'path_active_show active'
                            : 'path_active active'
                        }
                      ></div>
                    </li>
                  </Link>
                ))}
                {/* <Button
                  style={{ borderColor: '#fff', color: '#000' }}
                  size="small"
                  onClick={changeLanguage}
                >
                  {lang === 'zh' ? 'English' : '中文'}
                </Button> */}
              </Col>
            </Row>
          </Col>
        </Row>
      </ul>
    </div>
  )
}
