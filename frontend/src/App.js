import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./component/layout/Layout";
import Login from "./pages/auth/Login";
import Home from "./pages/home/Home";

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
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
