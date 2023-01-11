import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/registerUser/RegisterUser";
import Dashboard from "./pages/dashboard/Dashboard";
import { ListItemsProvider } from "./context/ListItemContext";
import { Services } from './services/Services'

function App() {
  const { listItemsp, listOfPokemons, GetListItems, GetListUrl } = Services();

  return (
    <ListItemsProvider value={{ listItemsp, listOfPokemons, GetListItems, GetListUrl }}>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </ListItemsProvider>
  );
}

export default App;
