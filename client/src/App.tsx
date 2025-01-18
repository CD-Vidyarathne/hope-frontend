import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import AppLayout from "./AppLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Donations from "./pages/Donations";
import Programs from "./pages/Programs";
import DonationDetails from "./pages/DonationDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";

const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profile/:id/edit" element={<EditProfile />} />
        <Route
          path="/donations/:id"
          element={
            <ProtectedRoute>
              <DonationDetails />
            </ProtectedRoute>
          }
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
