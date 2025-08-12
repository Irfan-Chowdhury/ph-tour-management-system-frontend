import { Outlet } from "react-router"
import { Button } from "./components/ui/button"

function App() {
  
  return (
    <>
     <p>This is single app Component</p>
     <Outlet/>
     <Button>Click Me</Button>
    </>
  )
}

export default App
