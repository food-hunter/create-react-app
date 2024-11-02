import React from "react"
import styles from "./Home.module.css"

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <img
          src="/images/sourdough-bread.webp"
          className="App-logo"
          alt="bread"
        />
        <img src="/images/latte.webp" className="App-logo" alt="matcha latte" />
        <img src="/images/Bao.webp" className="App-logo" alt="bao bun" />
        <img src="/images/bagel.webp" className="App-logo" alt="bagel" />
      </div>
      <div className={styles.logo}>
        <p>
          <img
            src="/images/logo.jpg"
            className="App-logo-small"
            alt="Sourdough Hut Brand Logo"
          />
          Sourdough Hut
        </p>
      </div>
    </>
  )
}

export default Home
