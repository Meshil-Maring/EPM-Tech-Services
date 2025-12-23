import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isAuth, loading } = useAuth();

  if (loading) return <p className="text-center mt-10">Checking auth...</p>;

  if (!isAuth) return <Navigate to="/auth/log-in" replace />;

  return <>{children}</>;
};

export default ProtectedRoute;
