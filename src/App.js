import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CadastroAnimais from "./pages/CadastroAnimais";
import CadastroUsuario from "./pages/CadastrarUsuario";
import EditarProduto from "./pages/EditarProduto";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/Usuarios/cadastrar" element={<CadastroUsuario/>} />
          <Route path="/Animais/editar/:id" element={<EditarProduto/>} />
          <Route path="/produto/cadastrar" element={<CadastroAnimais/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
