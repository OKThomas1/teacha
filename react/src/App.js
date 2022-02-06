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
<<<<<<< HEAD
          <Route path="/edit" element={<Edit/>}/>
=======
          <Route path="/edit-profile" element={<Edit/>}/>
          <Route path="/settings" element = {<Settings/>}/>
>>>>>>> 9480993a603481ce934154ace040d96d3e580360
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;