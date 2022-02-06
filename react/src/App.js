import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./Components/Home/Home"
import { Edit } from "./Components/Edit-profile/Edit"
import { Settings } from "./Components/Settings/Settings"
import { Match } from "./Components/Match/Match"
import Header from "./Components/Header/Header"
import { useEffect, useState } from "react"
import axios from "axios"
import Cookies from "js-cookie"

function App() {
  const [self, setSelf] = useState(null)
  const [socket, setSocket] = useState(null)

  const updateSelf = user => {
    setSelf(user)
  }

  useEffect(() => {
    axios
      .get("/api/get-self", { headers: { "X-CSRFTOKEN": Cookies.get("csrftoken") } })
      .then(res => {
        console.log(res.data)
        setSelf(res.data)
        let websocket = new WebSocket("ws://" + window.location.host + "/ws/teacha")
        websocket.onopen = event => {
          console.log("open", event)
        }
      })
      .catch(err => {
        console.error(err.message)
      })
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home user={self} />} />
          <Route path="/edit" element={<Edit user={self} updateSelf={updateSelf} />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/match" element={<Match user={self} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
