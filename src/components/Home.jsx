import logo from "../logo.svg"
const Home = () => {
  return (
    <div>
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Order Bread
        <img src={logo} className="App-logo" alt="logo" />
      </a>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Order Cake
        <img src={logo} className="App-logo-fast-spin" alt="logo" />
      </a>
      <a
        className=""
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Order Toast
        <img src={logo} className="App-logo-spin-back" alt="logo" />
      </a>
    </div>
  )
}
export default Home
