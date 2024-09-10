import React, { useState, useEffect } from "react"
import styles from "./index.module.scss"
import HeaderImage from "@/components/HeaderImage"
import "@/assets/styles/common.scss"
import { Select, Space, Row, Col } from "antd"
import { useLangStore } from "@/store/lang"
import Title from "@/components/Title"
export default function News() {
  const { lang } = useLangStore()
  const [sort, setSort] = useState(1)
  const newToOldZh = [
    {
      time: "2022年7月",
      title: "天目1号”超导量子芯片应用成果重磅发布！",
      link: "https://hic.zju.edu.cn/2022/0723/c56130a2605554/page.htm",
    },
    {
      time: "2021年12月",
      title: "浙江大学发布“莫干1号”“天目1号”超导量子芯片",
      link: "https://hic.zju.edu.cn/2021/1220/c56173a2452801/page.htm",
    },
  ]
  const oldToNewZh = [
    {
      time: "2021年12月",
      title: "浙江大学发布“莫干1号”“天目1号”超导量子芯片",
      link: "https://hic.zju.edu.cn/2021/1220/c56173a2452801/page.htm",
    },
    {
      time: "2022年7月",
      title: "天目1号”超导量子芯片应用成果重磅发布！",
      link: "https://hic.zju.edu.cn/2022/0723/c56130a2605554/page.htm",
    },
  ]
  const newToOldEn = [
    {
      time: "Jun 2024.",
      type: "Article",
      source: "Source: China News Network",
      image: "image",
      title:
        "Our paper “SpREM: Exploiting Hamming Sparsity for Fast Quantum Readout Error Mitigation” was accepted by the 61st Design Automation Conference (DAC 2024). Congratulations to Hanyu and Siwei.",
      link: "",
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
      link: "",
    },
    {
      time: "Feb 2024. ",
      type: "Article",
      source: "Source: China News Network",
      image: "image",
      title:
        "MorphQPV is awarded the “Artifacts Evaluated – Functional” and “Results Reproduced” Badges offered by the Artifact Evaluation Committee of ASPLOS 2023.",
      link: "",
    },
    {
      time: "Jul 2022",
      type: "Article",
      source: "Source: China News Network",
      image: "image",
      title:
        "“Tianmu 1” superconducting quantum chip application results released!",
      link: "https://hic.zju.edu.cn/2022/0723/c56130a2605554/page.htm",
    },
    {
      time: "Dec 2021",
      type: "Article",
      source: "Source: China News Network",
      image: "image",
      title:
        "Zhejiang University released “Mogan 1” and “Tianmu 1” superconducting quantum chips",
      link: "https://hic.zju.edu.cn/2021/1220/c56173a2452801/page.htm",
    },
  ]
  const oldToNewEn = [
    {
      time: "Dec 2021",
      type: "Article",
      source: "Source: China News Network",
      image: "image",
      title:
        "Zhejiang University released “Mogan 1” and “Tianmu 1” superconducting quantum chips",
      link: "https://hic.zju.edu.cn/2021/1220/c56173a2452801/page.htm",
    },
    {
      time: "Jul 2022",
      type: "Article",
      source: "Source: China News Network",
      image: "image",
      title:
        "“Tianmu 1” superconducting quantum chip application results released!",
      link: "https://hic.zju.edu.cn/2022/0723/c56130a2605554/page.htm",
    },
    {
      time: "Feb 2024. ",
      type: "Article",
      source: "Source: China News Network",
      image: "image",
      title:
        "MorphQPV is awarded the “Artifacts Evaluated – Functional” and “Results Reproduced” Badges offered by the Artifact Evaluation Committee of ASPLOS 2023.",
      link: "",
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
      link: "",
    },
    {
      time: "Jun 2024.",
      type: "Article",
      source: "Source: China News Network",
      image: "image",
      title:
        "Our paper “SpREM: Exploiting Hamming Sparsity for Fast Quantum Readout Error Mitigation” was accepted by the 61st Design Automation Conference (DAC 2024). Congratulations to Hanyu and Siwei.",
      link: "",
    },
  ]

  const handleChange = (value) => {
    setSort(value)
    if (value && lang === "zh") {
      setNewsList(oldToNewZh)
    }
    if (value && lang === "en") {
      setNewsList(oldToNewEn)
    }
    if (!value && lang === "en") {
      setNewsList(newToOldEn)
    }
    if (!value && lang === "zh") {
      setNewsList(newToOldZh)
    }
  }
  // <Row justify={'center'}>
  //         <Col span={14}></Col>
  //       </Row>
  const [newsList, setNewsList] = useState(newToOldZh)
  useEffect(() => {
    if (sort && lang === "zh") {
      setNewsList(oldToNewZh)
    }
    if (sort && lang === "en") {
      setNewsList(oldToNewEn)
    }
    if (!sort && lang === "en") {
      setNewsList(newToOldEn)
    }
    if (!sort && lang === "zh") {
      setNewsList(newToOldZh)
    }
  }, [lang])
  return (
    <div className={styles.root}>
      <HeaderImage />
      <Row justify={"center"}>
        <Col span={15}>
          <div className="news">
            <Title titleText={"News"} />
            <Select
              defaultValue="Date(Newst to Oldest)"
              onChange={handleChange}
              style={{
                width: "100%",
                margin: "20px 0 30px 0",
              }}
              options={[
                {
                  value: 0,
                  label: "Date(Newst to Oldest)",
                },
                {
                  value: 1,
                  label: "Date(Oldest to  Newst )",
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
