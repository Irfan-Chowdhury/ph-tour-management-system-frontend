// import { Outlet } from "react-router"
// import { Button } from "./components/ui/button"
import type { Outlet } from "react-router"
import CommonLayout from "./components/layout/CommonLayout"

function App() {
  
  return (
    <CommonLayout>
      <<Outlet/>    
    </CommonLayout>
  )
}

export default App
