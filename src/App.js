import { BrowserRouter, Routes, Route } from "react-router-dom";

// CSS
import "./css/App.scss";

// Screens
import { InboxScreen } from "./screens";

// Components
import { Sidebar, Header } from "./components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Header />
        <div className="app-wrapper">
          <Routes>
            <Route path="/" element={<InboxScreen />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
