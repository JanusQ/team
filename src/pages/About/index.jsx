import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styles from "./index.module.scss"
import { Row, Col, Card } from "antd"
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import banner1 from "@/assets/image/banner/banner1.jpg"
export default function About() {
  const newsListEn = [
    {
      time: "Jun 2024.",
      type: "Article",
      source: "Source: China News Network",
      image: "image",
      title:
        "Our paper “SpREM: Exploiting Hamming Sparsity for Fast Quantum Readout Error Mitigation” was accepted by the 61st Design Automation Conference (DAC 2024). Congratulations to Hanyu and Siwei.",
      link: "https://hic.zju.edu.cn/2022/0723/c56130a2605554/page.htm",
    },
    {
      time: "Apr 2024.",
      type: "Article",
      source: "Source: China News Network",
      image: "image",
      title: (
        <span>
          Our tutorial “Janus 2.0: A Software Framework for Analyzing,
          Optimizing, and Implementing Quantum Circuit” was accepted to
          ASPLOS’24 and scheduled on Apr 27
          <a
            style={{ color: "#158CBA" }}
            href="https://www.asplos-conference.org/asplos2024/workshops-and-tutorials/"
            target="_blank"
            rel="noopener noreferrer"
          >
            &nbsp; Link
          </a>
          , please attend! This is the link to our tutorial
          <a
            style={{ color: "#158CBA" }}
            href="https://janusq.github.io/tutorials/home.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            &nbsp; Link
          </a>
          .
        </span>
      ),
      link: "https://hic.zju.edu.cn/2022/0723/c56130a2605554/page.htm",
    },
    // {
    //   time: "Feb 2024. ",
    //   type: "Article",
    //   source: "Source: China News Network",
    //   image: "image",
    //   title:
    //     "MorphQPV is awarded the “Artifacts Evaluated – Functional” and “Results Reproduced” Badges offered by the Artifact Evaluation Committee of ASPLOS 2023.",
    //   link: "https://hic.zju.edu.cn/2022/0723/c56130a2605554/page.htm",
    // },
    // {
    //   time: "Jul 2022.",
    //   type: "Article",
    //   source: "Source: China News Network",
    //   image: "image",
    //   title:
    //     "“Tianmu 1” superconducting quantum chip application results released!",
    //   link: "https://hic.zju.edu.cn/2022/0723/c56130a2605554/page.htm",
    // },
    // {
    //   time: "Dec 2021.",
    //   type: "Article",
    //   source: "Source: China News Network",
    //   image: "image",
    //   title:
    //     "Zhejiang University released “Mogan 1” and “Tianmu 1” superconducting quantum chips",
    //   link: "https://hic.zju.edu.cn/2021/1220/c56173a2452801/page.htm",
    // },
  ]
  return (
    <div className={styles.about}>
      <Row justify="center">
        <Col span={12}>
          <div className="about_container">
            <div className="about_title">
              Welcome to Taiyuan Quantum Computing Research Group!
            </div>
            <div className="content">
              Taiyuan Quantum Computing Research Group comes from the College of
              Computer Science and Technology at Zhejiang University. The team
              members are dedicated to developing software and architecture for
              future-oriented quantum computing, which is at the forefront of
              international research in fields such as superconducting quantum
              control systems, quantum compilers, and quantum algorithms,
              constantly striving to surpass boundaries and advance the
              capabilities of quantum computing.
            </div>
            <div className="swiper">
              <Swiper
                // install Swiper modules
                // 自动给播放
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                centeredSlides={true}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide>
                  <div className="team_img"></div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="team_img"></div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="team_img"></div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="team_img"></div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </Col>
        <Col xs={{ span: 0 }} lg={{ span: 4 }}>
          <div className="side">
            <div className="side_title">News</div>

            <div className="news_content">
              {newsListEn.map((item, index) => (
                <div className="news_item" key={index}>
                  <span className="time">{item.time}&nbsp;</span>
                  <span className="title">{item.title}</span>
                </div>
              ))}
            </div>
            <Link style={{ color: "#158CBA" }} to="/news" className="more">
              ... see all News
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  )
}
