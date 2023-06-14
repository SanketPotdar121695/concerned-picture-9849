import "./App.css";
import { Navbar } from "./components/Navbar";
import UserRoutes from "./pages/AllRoutes/UserRoutes";
function App() {
  return (
    <div className="App">
      <Navbar />
      <UserRoutes />
    </div>
  );
}

export default App;
