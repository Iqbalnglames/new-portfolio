import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../Pages/home"
import Contacts from "../Pages/contacts"
import Profile from "../Pages/profile"
import Projects from "../Pages/projects"
import Certificates from "../Pages/certificates"

const Navigation = () => {
    return(
        <div className="mt-14 px-10">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
        </Routes>
        </div>
    )
}
export default Navigation