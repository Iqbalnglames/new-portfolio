import Navbar from "./assets/navbar"
import Navigation from "./Utilities/router"

function App() {

  return (
    <div className="bg-[#4F3DFF] p-16 h-[95vh] rounded-2xl text-white">
     <Navbar />
     <div className="flex justify-center">
     <Navigation />
     </div>
     <div className="flex justify-end">
     <div className="fixed bottom-20">
      <p className="text-xs">Developed By</p>
      <p className="text-xl">TechBatch Technology</p>
     </div>
     </div>
    </div>
  )
}

export default App
