
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./Components/Home/Home"
import { Edit } from "./Components/Edit-profile/Edit"
import { Settings } from "./Components/Settings/Settings"
import { Match } from "./Components/Match/Match"
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route path="/home" element={<Home/>}/>
          <Route path="/edit" element={<Edit/>}/>
          <Route path="/settings" element = {<Settings/>}/>
=======
          <Route path="/home" element={<Home />} />
          <Route path="/edit-profile" element={<Edit />} />

          <Route path="/settings" element={<Settings />} />
          <Route path="/match" element={<Match />} />

>>>>>>> 7f3fc0711a2e826fff5580f72e13796a59fc8375
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
