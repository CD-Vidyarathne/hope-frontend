import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import {
  DashboardPage,
  RequestPage,
  LoginPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  EventsPage,
  ProfileManagePage,
  AnalysisPage,
} from "./pages/";
import ProtectedRoute from "./routes/ProtectedRoute";

const App: React.FC = () => {
  // NOTE: Demo purpose only.
  const isAuthenticated: boolean = true;

  return (
    <Router>
      <div className="w-screen h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardPage />} />
            <Route path="/requests" element={<RequestPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/manage-profiles" element={<ProfileManagePage />} />
            <Route path="/analysis" element={<AnalysisPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
