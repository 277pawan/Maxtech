import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Course from './Components/Courses/Course';
import Blog from './Components/Blog/Blog';
import Guide from './Components/Guide/Guide';
import Subscribe from './Components/Subscribe/Subscribe';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Default from './Components/Default/Default';
import Landing from './Components/Landingpage/Landing';
import { useEffect, useState } from 'react';
import Games from './Components/Games/Games';
import Tictac from './Components/Tictactoe/Tictac';
import Typewriter from './Components/Typewriter/Typewriter';
import Superlist from './Components/Superlist/Superlist';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';

function App() {
  const [landing, setlanding] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setlanding(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [])
  return (
    <div className="App">
      {landing ? (<Landing />) :
        (<BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<>
              <Header />
              <Course />
              <Blog />
              <Guide />
              <Subscribe />
              <Footer />
            </>}></Route>
            <Route path='/Games' element={<Games />}></Route>
            <Route path='/Tictac' element={<Tictac />}></Route>
            <Route path='/Typewriter' element={<Typewriter />}></Route>
            <Route path='/Superlist' element={<Superlist />}></Route>
            <Route path='/Login' element={<Login />}></Route>
            <Route path='*' element={<Default />}></Route>
            <Route path='/Contact' element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
        )}
    </div>
  );
}

export default App;
