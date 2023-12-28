import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Movies from './components/movies';
import About from './pages/About'
import Contact from './pages/Contact'
import Details from './pages/Details'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar style={{position:"fixed"}}></Navbar>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="details/:id" element={<Details/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
