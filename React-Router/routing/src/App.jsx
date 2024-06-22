import { Route, Routes } from "react-router-dom"
import People from "./components/People"
import UsingAxios from "./components/UsingAxios"


function App() {
 

  return (
    <>
      {/* <h1>Hello Bangladesh</h1> */}
      <Routes>
        <Route path="/people" element={<People></People>}></Route>
        <Route path="/" element={<h1>This is home page</h1>}></Route>
      </Routes>
      {/* <People></People> */}
      {/* <UsingAxios></UsingAxios> */}
    </>
  )
}

export default App
