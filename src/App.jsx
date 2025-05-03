import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "../src/Styles/App.css"
import Blogs from './Components/Blogs'
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Blog1 from './Pages/Blog1';
import About from './Pages/About';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/sog" element={<Blog1/>} />

      </Routes>
    </Router>
  );
}

export default App;
