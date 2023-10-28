import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import { ContextProvider } from "./context/Context";
import Reveal from "./components/Reveal";

function App() {
  return (
    <ContextProvider>
      <Reveal>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
      </Reveal>
    </ContextProvider>
  );
}

export default App;
