import logo from './logo.svg';
import './App.css';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
    <hr/>

      <AllRoutes/>
      
    </div>
  );
}

export default App;
