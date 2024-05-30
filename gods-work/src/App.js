import { Route, Routes } from 'react-router-dom';
import Login from "./pages/login/index.tsx";

const App = () => {
  return (
    <Routes>
      <Route path ="/" element ={<Login />} /> 
    </Routes>
  );
}

export default App;
