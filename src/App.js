
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import NavBar from './components/navbar/NavBar';
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Tours from "./pages/tours/Tours"

function App() {
  return (
    <div className="App">
    <NavBar/>
    <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='tours' element={<Tours/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
    </main>
    
    </div>
  );
}

export default App;
