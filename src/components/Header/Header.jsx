import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  let navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login")
  }
  return (
    <Navbar bg="light"  expand="lg" className="navbar">
      <Container>
        <NavLink to="/" className={'navbar-brand'} style={{color: 'black'}}>Typeform</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <NavLink to="/" className="nav-link black">Home</NavLink>
            <NavLink to="/user" className="nav-link black">User</NavLink>
            <NavLink to="/admin" className="nav-link">Admin</NavLink>
          </Nav>
          <Nav>
            <button onClick={() => handleLogin()} className='btn-login'>Login</button>
            <button className='btn-logout'>Logout</button>
             {/* <NavDropdown title="Setting" id="basic-nav-dropdown">
              <NavDropdown.Item>Log in</NavDropdown.Item>
              <NavDropdown.Item > Log out</NavDropdown.Item>
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;