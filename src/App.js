import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import NewContact from './views/NewContact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new-contact' element={<NewContact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
