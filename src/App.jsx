import { Outlet } from "react-router-dom"

function App() {

  return (
    <div className="max-w-[1140px] mx-auto">
      <Outlet></Outlet>
    </div>
  )
}

export default App
