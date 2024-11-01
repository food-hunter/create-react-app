import { type } from "@testing-library/user-event/dist/cjs/utility/type.js"
import logo from "../../logo.svg"
import styles from "./Food.module.css"
const Food = () => {
  return (
    <>
      <body className={styles.menuWrapper}>
        <div className={styles.menu}>
          <main>
            <h1>Sourdough Hut</h1>
            <p className="established">Est. 2024</p>
            <section>
              <h2>Sourdough Bagels</h2>
              <article className="item">
                <p className="flavor">Everything</p>
                <p className="price">3.50</p>
              </article>

              <article className="item">
                <p className="flavor">Blueberry</p>
                <p class="price">3.50</p>
              </article>
              <article className="item">
                <p className="flavor">Sesame</p>
                <p className="price">3.50</p>
              </article>
              <article className="item">
                <p className="flavor">Scallion</p>
                <p className="price">3.50</p>
              </article>
              <article className="item">
                <p className="flavor">Plain</p>
                <p className="price">3.50</p>
              </article>
              <article className="item">
                <p className="flavor">Curry</p>
                <p className="price">4.50</p>
              </article>
            </section>
            <section>
              <h2>Sourdough Bao</h2>
              <article className="item">
                <p className="dessert">BBQ Pork or Chicken</p>
                <p className="price">3.50</p>
              </article>
              <article className="item">
                <p className="dessert">Gojuchang Pork or Chicken</p>
                <p className="price">3.50</p>
              </article>
              <article className="item">
                <p className="dessert">Tofu and Veggie</p>
                <p className="price">3.50</p>
              </article>
              <article className="item">
                <p className="dessert">Chives</p>
                <p className="price">3.50</p>
              </article>
            </section>
            <section>
              <h2>Sourdough Bread</h2>
              <article className="item">
                <p className="flavor">Regular</p>
                <p className="price">3.50</p>
              </article>

              <article className="item">
                <p className="flavor">Cranberry Orange</p>
                <p class="price">3.50</p>
              </article>
              <article className="item">
                <p className="flavor">Rosemary</p>
                <p className="price">3.50</p>
              </article>
              <article className="item">
                <p className="flavor">Cinnamon</p>
                <p className="price">3.50</p>
              </article>
              <article className="item">
                <p className="flavor">Cheddar</p>
                <p className="price">3.50</p>
              </article>
            </section>
            <section>
              <h2>Drinks</h2>
              <article className="item">
                <p className="flavor">Vietnamnese Coffee(Iced or Hot)</p>
                <p className="price">2.50</p>
              </article>

              <article className="item">
                <p className="flavor">Matcha Latte(Iced or Hot)</p>
                <p class="price">2.50</p>
              </article>
              <article className="item">
                <p className="flavor">Yuzu Peach Tea (Iced or Hot)</p>
                <p className="price">3.50</p>
              </article>
              <article className="item">
                <p className="flavor">Boba Tea</p>
                <p className="price">4.50</p>
              </article>
            </section>
          </main>
        </div>
      </body>
    </>
  )
}

export default Food
