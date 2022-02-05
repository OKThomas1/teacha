import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './Home/Home';
import { Edit } from './Edit-profile/Edit';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
        </Routes>
        <Routes>
          <Route path="/edit-profile" element={<Edit/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;