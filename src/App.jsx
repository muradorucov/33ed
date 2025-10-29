import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout/layout";
import Home from './pages/Home/index'; 
import About from './pages/About/index'; 
import Products from './pages/Products/index'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} /> 
          <Route path="products" element={<Products />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;