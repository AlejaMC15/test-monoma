import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/registerUser/RegisterUser";
import Dashboard from "./pages/dashboard/Dashboard";
import { ListItemsProvider } from "./context/ListItemContext";
import { UseList } from './hooks/useList'

function App() {
  const { listItems, listOfPokemons, getListItems } = UseList();

  return (
    <ListItemsProvider value={{ listItems, listOfPokemons, getListItems }}>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </ListItemsProvider>
  );
}

export default App;
