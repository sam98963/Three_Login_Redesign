import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Menu from "./Components/Menu/Menu"

import { useState } from "react"

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="relative flex flex-col items-center justify-between w-screen h-screen flex-wrap">
        <Header setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>
        <Footer />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      </div>
    </>
  )
}

export default App
