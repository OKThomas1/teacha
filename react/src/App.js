import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './Components/Home/Home';
import { Edit } from './Components/Edit-profile/Edit';
import {Settings} from './Components/Settings/Settings';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/edit-profile" element={<Edit/>}/>
          <Route path="/settings" element = {<Settings/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;