import React, { Suspense } from "react"
import { Outlet } from "react-router-dom"

import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"
import styles from "./index.module.scss"
import { ConfigProvider } from "antd"

export default function Layout() {
  const menus = [
    {
      label: "About",
      path: "/home",
    },
    {
      label: "News",
      path: "/news",
    },
    {
      label: "Publications",
      path: "/publications",
    },
    // {
    //   label: "Blog",
    //   path: "/blog",
    // },
    {
      label: "Courses",
      path: "/course",
    },
    {
      label: "Awards",
      path: "/awards",
    },
    // {
    //   label: "Talks",
    //   path: "/talks",
    // },
    // {
    //   label: "Media",
    //   path: "/media",
    // },
    {
      label: "Team",
      path: "/team",
    },
    // {
    //   label: "Gallery",
    //   path: "/gallery",
    // },
  ]
  return (
    <div className={styles.root}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#035b9e",
            fontFamily: "sans-serif",
          },
        }}
      >
        <Header menus={menus}></Header>
        <Content>
          <Suspense fallback={<div>Loading...</div>}>
            <div>
              <Outlet />
            </div>
          </Suspense>
        </Content>
        <Footer></Footer>
      </ConfigProvider>
    </div>
  )
}
