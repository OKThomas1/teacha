import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './Components/Home/Home';
import { Edit } from './Components/Edit-profile/Edit';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/edit" element={<Edit/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;