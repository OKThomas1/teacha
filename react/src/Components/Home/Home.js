import {useEffect} from "react"
import axios from "axios"
import Cookies from "js-cookie"

export const Home = () => {
  useEffect(() => {
    axios
      .get("/api/get-user", {headers: {"X-CSRFTOKEN": Cookies.get("csrftoken"), username: "tb"}})
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return <div>Home Page</div>
}
