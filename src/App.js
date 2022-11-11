
import './App.css';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import {Route,Routes} from "react-router-dom"
import { Beauty } from './components/Beauty';
function App() {
  return (
    <>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    <div className="App">
     {/* <Login/> */}
     <Beauty/>
    </div>
    </>
  );
}

export default App;
