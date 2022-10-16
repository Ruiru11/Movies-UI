import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nav from "./components/nav";
import Home from "./pages/home";
import { SingleMovieContextProvider } from "./context/SingleMovieContext";
import Login from "./pages/login";
import Register from "./pages/register";
import "./styles.css";

export default function App() {
  return (
    <SingleMovieContextProvider>
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </SingleMovieContextProvider>
  );
}
