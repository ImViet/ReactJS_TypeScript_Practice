import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { AskPage } from "./pages/AskPage";
import { SignInPage } from "./pages/SignInPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="" element={<HomePage />}></Route>
          <Route path="search" element={<SearchPage />}></Route>
          <Route path="ask" element={<AskPage />}></Route>
          <Route path="signin" element={<SignInPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
