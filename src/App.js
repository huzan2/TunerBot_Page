import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import NavBar from "./components/NavBar";
import Logo from "./components/Logo";
import BotStatus from "./routes/BotStatus";
import NotFound from "./routes/NotFound";
import History from "./routes/History";

function App() {
  return (
    <div className="app">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Logo />
        <div className="flex justify-center">
          <NavBar />
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/status" element={<BotStatus />} />
          <Route path="/history" element={<History />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
