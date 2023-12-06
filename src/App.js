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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
          <Route path='*' element={<Default />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
