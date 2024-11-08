import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import {
  DashboardPage,
  LoginPage,
  OtherPage,
  ForgotPasswordPage,
  ResetPasswordPage,
} from "./pages/";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  // NOTE: Demo purpose only.
  const isAuthenticated = true;
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
            <Route path="other" element={<OtherPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
