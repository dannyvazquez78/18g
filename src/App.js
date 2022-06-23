import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from"./pages/Home";
import Profile from"./pages/Profile";
import About from"./pages/About";
function App() {
  return <div className="App">
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/profile">Profile</Link>
    </nav>
 <Routes>
  <Route path="/" element={<Home />} />
  <Route path="about" element={<About />} />
  <Route path="profile" element={<Profile />} />
</Routes>
</div>
}
export default App;