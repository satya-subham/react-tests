import './App.css';
import { Nav } from './components/nav/Nav'
import { Main } from './components/main/Main'
import { Headlines } from './components/headlines/Headlines';
import { AboutUs } from './components/about/AboutUs'
import { Contact } from './components/contact/Contact';
// import { Footer } from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('')
  return (
    <>
      <Routes>
      <Route path='/' element={<Nav setSearch={setSearch}/>}/>
      </Routes>
      <Routes>
      <Route path='/' element={<Main search={search}/>}/>
      <Route path='/headlines' element={<Headlines/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      {/* <Routes>
        <Route path='/' element={<Footer/>}/>
      </Routes> */}
    </>
  );
}

export default App;
