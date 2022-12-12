import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./componet/layout/Layout";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/"
              element={<Layout><Home/></Layout>}
            />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
