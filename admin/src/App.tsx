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
  RequestTablePage,
  RequestProfilePage,
  RequestAddPage,
  EventTablePage,
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
            <Route path="/requests">
              <Route index element={<RequestPage />} />
              <Route path="patients">
                <Route index element={<RequestTablePage title="Patients" />} />
                <Route
                  path=":id"
                  element={<RequestProfilePage title="Patients" />}
                />
                <Route
                  path=":id/add"
                  element={<RequestAddPage title="Patients" />}
                />
              </Route>
              <Route path="children">
                <Route index element={<RequestTablePage title="Children" />} />
                <Route
                  path=":id"
                  element={<RequestProfilePage title="Children" />}
                />
                <Route
                  path=":id/add"
                  element={<RequestAddPage title="Children" />}
                />
              </Route>
              <Route path="elders">
                <Route index element={<RequestTablePage title="Elders" />} />
                <Route
                  path=":id"
                  element={<RequestProfilePage title="Elders" />}
                />
                <Route
                  path=":id/add"
                  element={<RequestAddPage title="Elders" />}
                />
              </Route>
            </Route>
            <Route path="events">
              <Route index element={<EventsPage />} />
              <Route path="admin" element={<EventTablePage title="Admin" />} />
              <Route path="users" element={<EventTablePage title="Users" />} />
            </Route>
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
