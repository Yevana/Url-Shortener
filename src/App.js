import LoginPage from './components/user';
import { Route, Routes } from "react-router-dom";
import Urlshortener from './components/urlShort/Urlshortener';


function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage/>}></Route>
      <Route path='/urlshort' element={<Urlshortener/>}></Route>

    </Routes>
  );
}

export default App;
