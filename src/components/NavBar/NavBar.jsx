import NavButton from "../NavButton"
import styles from "./NavBar.module.css"

const NavBar = ({ handleClick, currentComponent, componentNames }) => {
  return (
    <div className={`topnav ${styles.navbar}`}>
      {componentNames.map((componentName) => {
        return (
          <NavButton
            handleClick={handleClick}
            componentName={componentName}
            key={componentName}
            isActive={currentComponent === componentName}
          />
        )
      })}
    </div>
  )
}

export default NavBar
