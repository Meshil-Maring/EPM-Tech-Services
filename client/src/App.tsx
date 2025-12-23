import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Transaction from "./pages/Transaction";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/auth/sign-up" element={<Signup />}></Route>
      <Route path="/auth/log-in" element={<Login />}></Route>

      <Route
        path="/transaction"
        element={
          <ProtectedRoute>
            <Transaction />
          </ProtectedRoute>
        }
      ></Route>
    </Routes>
  );
}

export default App;
