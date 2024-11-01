import NavButton from "../NavButton"

const NavBar = ({ handleClick, currentComponent, componentNames }) => {
  return (
    <div style={{ marginTop: "1rem" }} className="topnav">
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
