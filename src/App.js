import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import NewContact from './views/NewContact';
import EditContact from './views/EditContact'
import './App.css';
import injectContext from './store/context'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new-contact' element={<NewContact />} />
        <Route path='/edit-contact' element={<EditContact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default injectContext(App);
