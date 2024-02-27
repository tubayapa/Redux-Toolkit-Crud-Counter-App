import { BrowserRouter, Routes, Route } from "react-router-dom";
import CounterPage from "./pages/CounterPage";
import CrudPage from "./pages/CrudPage";
import Header from "./components/Header";
import { useSelector } from "react-redux";

const App = () => {
  const counterState = useSelector((store) => store.counterReducer);
  return (
    <BrowserRouter>
      <div
        style={{ minHeight: "100vh" }}
        className={
          counterState.isDarkTheme ? "bg-light text-dark" : "bg-dark text-light"
        }
      >
        <Header />
        <Routes>
          <Route path="/" element={<CounterPage />} />
          <Route path="/crud" element={<CrudPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
