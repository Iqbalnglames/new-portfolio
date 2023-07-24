import Navbar from "./assets/navbar"
import Navigation from "./Utilities/router"

function App() {

  return (
    <div className="bg-[#4F3DFF] lg:p-16 p-10 lg:h-[95.5vh] h-auto left-6 right-6 rounded-2xl text-white">
     <Navbar />
     <div className="flex justify-center">
     <Navigation />
     </div>
     <div className="flex justify-end">
     <div className="fixed lg:bottom-20 bottom-11">
      <p className="text-xs">Developed By</p>
      <p className="text-xl">TechBatch Technology</p>
     </div>
     </div>
    </div>
  )
}

export default App
