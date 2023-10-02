import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import ProtectedRoute from './Routes/ProtectedRoute';
import Home  from './components/home/Home';
import Product from './components/product/Products';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products" element={<Product />} /> */}
        <Route  element={<ProtectedRoute />}>
          <Route element={<Product />} path="/products" exact />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
