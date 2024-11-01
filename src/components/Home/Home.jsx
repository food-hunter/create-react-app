import bread from "../../sourdough-bread.webp"
import bun from "../../Bao.webp"
import bagel from "../../bagel.webp"
import latte from "../../latte.webp"
import logo from "../../logo.jpg"
import styles from "./Home.module.css"

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <img src={bread} className="App-logo" alt="bread" />
        <img src={latte} className="App-logo" alt="matcha latte" />
        <img src={bun} className="App-logo" alt="bao bun" />
        <img src={bagel} className="App-logo" alt="bagel" />
      </div>
      <div className={styles.logo}>
        <p>
          <img src={logo} className="App-logo-small" alt="brand logo" />
          Sourdough Hut
        </p>
      </div>
    </>
  )
}

export default Home
