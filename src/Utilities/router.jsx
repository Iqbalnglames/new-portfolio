import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../Pages/home"
import Contacts from "../Pages/contacts"
import Profile from "../Pages/profile"

const Navigation = () => {
    return(
        <div className="mt-14 px-20">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
        </div>
    )
}
export default Navigation