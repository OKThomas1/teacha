import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Components/Home/Home';
import { Edit } from './Components/Edit-profile/Edit';
import { Match } from "./Components/Match/Match";

function App() {
  return (
    <div className='App w-100'>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/edit-profile" element={<Edit />} />
          <Route path="/match" element={<Match />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;