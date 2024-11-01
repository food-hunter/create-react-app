import logo from "../../headshot.jpg"
import styles from "./About.module.css"

const Bbb = () => {
  return (
    <>
      <div className={styles.about}>
        <img src={logo} className="Photo-logo" alt="logo" />
        <div style={{ marginLeft: "100px" }}>
          <h1>Hi, Welcome to the Sourdough Hut!</h1>
          <p>
            My name is Zheng, and I'm the founder of the Sourdough Hut. My
            passion for all things began with my first successful sourdough
            loaf. After that, I experimented with sourdough on all different
            baked goods, from bagels to waffles and even bao's! ( Chinese soft
            steamed buns) I want to integrate the health benefits of Sourdough
            into all the baked goods I have, hence the birth of the Sourdough
            Hut, where I share my passion for delicious things with a touch of
            sourdough. Thank you for visiting!
          </p>
        </div>
      </div>
    </>
  )
}

export default Bbb
