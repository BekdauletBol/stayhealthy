import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Notification from "./components/Notification";
import Sign_Up from "./components/Sign_Up";
import Login from "./components/Login";
import FindDoctorSearch from "./components/FindDoctorSearch";
import GiveReviews from "./components/GiveReviews";
import ProfileCard from "./components/ProfileCard";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Notification />
      <main>
        <Routes>
          <Route path="/" element={<><h1>StayHealthy</h1><p>Your health, anytime, anywhere.</p></>} />
          <Route path="/signup" element={<Sign_Up />} />
          <Route path="/login" element={<Login />} />
          <Route path="/appointments" element={<FindDoctorSearch />} />
          <Route path="/reviews" element={<GiveReviews />} />
          <Route path="/profile" element={<ProfileCard />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
