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
          loading="lazy"
        />
        <img 
          src="/images/latte.webp" 
          className="App-logo" 
          alt="matcha latte"
          loading="lazy"
        />
        <img 
          src="/images/Bao.webp" 
          className="App-logo" 
          alt="bao bun"
          loading="lazy"
        />
        <img 
          src="/images/bagel.webp" 
          className="App-logo" 
          alt="bagel"
          loading="lazy"
        />
      </div>
      <div className={styles.logo}>
        <p>
          <img
            src="/images/logo.jpg"
            className="App-logo-small"
            alt="Sourdough Hut Brand Logo"
            loading="lazy"
          />
          Sourdough Hut
        </p>
      </div>
    </>
  )
}

export default Home
