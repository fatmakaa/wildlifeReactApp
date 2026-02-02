import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import Animals from "./pages/Animals";
import AnimalDetail from "./pages/AnimalDetail";
import Events from "./pages/Events";
import Subscribe from "./pages/Subscribe";
import Voucher from "./pages/Voucher";
import { AuthProvider, useAuth } from "./firebase/AuthContext";

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <div className="p-4">Loading...</div>;
  return user ? children : <Navigate to="/subscribe" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/animals" element={<Animals />} />
            <Route path="/events" element={<Events />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/animals/:id" element={<AnimalDetail />} />

            <Route
              path="/voucher"
              element={
                <ProtectedRoute>
                  <Voucher />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AppLayout>
      </AuthProvider>
    </BrowserRouter>
  );
}