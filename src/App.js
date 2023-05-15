import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import MemoWallet from "./Pages/MemoWallet";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/registration" element={<Registration />}></Route>
          <Route exact path="/landingpage" element={<LandingPage />}></Route>
          <Route exact path="/wallet" element={<MemoWallet />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
