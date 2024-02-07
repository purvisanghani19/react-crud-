import { BrowserRouter, Route, Routes } from 'react-router-dom';  
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home/>} exact /> */}
          <Route path="/about" element={<About/>} />
          <Route path="/shop" element={<Shop/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
