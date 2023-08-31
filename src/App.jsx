import Navbar from "./assets/navbar"
import Navigation from "./Utilities/router"

function App() {

  return (
    <div className="bg-[#4F3DFF] patrick lg:p-16 p-10 lg:h-[95.5vh] h-auto left-6 right-6 rounded-2xl text-white">
     <Navbar />
     <div className="flex justify-center">
     <Navigation />
     </div>
     <div className="flex justify-end">
     <div className="lg:fixed bottom-16">
      <p className="text-lg">Developed By</p>
      <p className="text-2xl">TechBatch Technology</p>
     </div>
     </div>
    </div>
  )
}

export default App
