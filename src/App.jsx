import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SettingsData from "./components/Settings";
import Header from "./components/Header";
import NotRequired from "./components/NotRequired";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex h-[calc(100vh-4rem)]">
          <Sidebar />
          <main className="flex-1 overflow-y-auto bg-white rounded-2xl">
            <Routes>
              <Route path="/" element={<Navigate to="/settings" replace />} />
              <Route path="/dashboard" element={<NotRequired />} />
              <Route path="/inbox" element={<NotRequired />} />
              <Route path="/schedule" element={<NotRequired />} />
              <Route path="/reviews" element={<NotRequired />} />
              <Route path="/settings" element={<SettingsData />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
