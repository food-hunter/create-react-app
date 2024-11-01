const NavButton = ({ handleClick, componentName, isActive }) => {
  return (
    <p
      style={{
        backgroundColor: isActive ? "white" : "#e1e1d8",
        color: isActive ? "#333" : "#555",
        padding: "10px 20px",
        margin: "0 5px",
        borderRadius: "8px",
        cursor: "pointer",
        boxShadow: isActive
          ? "0px 4px 10px rgba(0, 0, 0, 0.2)"
          : "0px 2px 5px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
        transform: isActive ? "scale(1.05)" : "scale(1.0)",
      }}
      onClick={() => {
        handleClick(componentName)
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = "#f5f5f5"
        e.target.style.color = "#333"
        e.target.style.boxShadow = "0px 6px 15px rgba(0, 0, 0, 0.3)"
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = isActive ? "white" : "#e1e1d8"
        e.target.style.color = isActive ? "#333" : "#555"
        e.target.style.boxShadow = isActive
          ? "0px 4px 10px rgba(0, 0, 0, 0.2)"
          : "0px 2px 5px rgba(0, 0, 0, 0.1)"
      }}
    >
      {componentName}
    </p>
  )
}

export default NavButton
