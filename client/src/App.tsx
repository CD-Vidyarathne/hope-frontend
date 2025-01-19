import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import AppLayout from "./AppLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Donations from "./pages/Donations";
import Programs from "./pages/Programs";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import DonationHistory from "./pages/DonationHistory";
import VolunteeringActivities from "./pages/VolunteeringActivities";
import AidSeekerProfile from "./pages/AidSeekerProfile";
import DonationPayment from "./pages/DonationPayment";
import RequestHelp from "./pages/RequestHelp";
import AboutUs from "./pages/AboutUs";
import CreateEvent from "./pages/CreateEvent";
import FAQs from "./pages/FAQs";
import OurDonors from "./pages/OurDonors";

const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/our-donors" element={<OurDonors />} />
      </Route>

      <Route
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/request-help" element={<RequestHelp />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/donations/:id" element={<AidSeekerProfile />} />
        <Route path="/donations/:id/donate" element={<DonationPayment />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profile/:id/edit" element={<EditProfile />} />
        <Route
          path="/profile/:id/donation-history"
          element={<DonationHistory />}
        />
        <Route
          path="/profile/:id/volunteering-activities"
          element={<VolunteeringActivities />}
        />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  );
};

export default App;
