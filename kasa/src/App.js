import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './styles/_App.scss';
import Home from './page/Home';
import About from './page/About';
import Error from './page/Error';

function App() {
  return (
    <>
    <BrowserRouter>
    <div className='underBodyDiv'>
    <Header />
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path="about" element={<About/>}/>
       <Route path='*' element={<Error/>}/>
    </Routes>
    </div>
    <Footer />
    </BrowserRouter>

    </>
  );
}

export default App;


