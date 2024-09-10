import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "normalize.css"
import "./index.scss"
import { ConfigProvider } from "antd"
ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#158CBA",
      },
    }}
  >
    <App />
  </ConfigProvider>
)
