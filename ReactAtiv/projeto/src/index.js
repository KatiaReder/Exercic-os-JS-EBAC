import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './pages/About';

  //browser router é necessário para o app seguir a rota programada
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='about' element={<About />} />
    </Routes>
  </BrowserRouter>
);

