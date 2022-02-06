<<<<<<< HEAD

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./Components/Home/Home"
import { Edit } from "./Components/Edit-profile/Edit"
import { Settings } from "./Components/Settings/Settings"
import { Match } from "./Components/Match/Match"
=======
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Home} from "./Components/Home/Home"
import {Edit} from "./Components/Edit-profile/Edit"
import {Settings} from "./Components/Settings/Settings"

>>>>>>> 6beaa2fdb8bb811835e82e0933a199074bf1de28
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/home" element={<Home />} />
          <Route path="/edit-profile" element={<Edit />} />

          <Route path="/settings" element={<Settings />} />

          <Route path="/match" element={<Match />} />
        </Routes >
      </BrowserRouter >
    </div >

  )
}

export default App
