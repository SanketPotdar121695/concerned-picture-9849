import Admin from './ADMIN/Admin';
import './App.css';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import UserRoutes from './pages/AllRoutes/UserRoutes';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <UserRoutes />
      <Footer />
      {/* <Admin /> */}
    </div>
  );
}

export default App;
