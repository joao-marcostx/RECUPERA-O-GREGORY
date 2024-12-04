// importando components do bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar"; 

const fotoLoja = "img/bolo-chocolate-branco-tradicional.png";
const banner = "img/banner.png";

const NavBarra = () => {
  const usuarioNome = localStorage.getItem("userName")
    return (
    <div>
      <Navbar expand="lg" bg="black" data-bs-theme="dark">
        <Container>
          {/* Icone mercado */}
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "40px", color: "white" }}
          >
           
          </span>
          {/* Texto logo */}
          <Navbar.Brand href="/home"><img src={fotoLoja} alt="Logo da Loja" style={{ width: "50px"}}

/></Navbar.Brand>

          <Navbar.Toggle aria-controls="minha-nav" />
          <Navbar.Collapse id="minha-nav">
            {/* Paginas */}
            <Nav className="me-auto">
              <Nav.Link href="/home" className="active">animais</Nav.Link>
              <Nav.Link href="/produto/cadastrar">Cadastrar novos animais</Nav.Link>
              <Nav.Link href="/Usuarios/cadastrar">Cadastrar Novos Usiarios</Nav.Link>
            </Nav>
            {/* Sair */}
            <Nav className="justify-content-end">
              <Navbar.Text style={{color:"white"}}>
                {usuarioNome} |
              </Navbar.Text>
              <Nav.Link href="/login">Sair</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarra;
