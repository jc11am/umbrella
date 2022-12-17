import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./component/layout/Layout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import Home from "./pages/home/Home";
import AccessCode from "./pages/auth/AccessCode";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/"
              element={<Layout><Home/></Layout>}
            />

            <Route path="/login"
              element={<Login/>}
            />

            <Route path="/register"
              element={<Register/>}
            />

            <Route path="/forgot"
              element={<ForgotPassword/>}
            />

            <Route path="/resetPassword/:resetToken"
              element={<ResetPassword/>}
            />

            <Route path="/accessCode/:email"
              element={<AccessCode/>}
            />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

