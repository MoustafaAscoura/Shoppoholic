import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';

export default function Header() {
  const cart = useSelector(state => state.cart.cartbody)
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container className="rounded">
        <NavLink className="navbar-brand" to="/">Shoppoholic</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/products">Products</NavLink>
            <NavLink className="nav-link" to="/offers">Offers %</NavLink>
          </Nav>
          <Nav>
            <NavLink className="nav-link" to="/login">Login</NavLink>
            <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
            <NavLink className="nav-link position-relative" to="/cart">
              <FontAwesomeIcon icon={faCartShopping} />
              {Object.keys(cart).length ? <span className='bg-danger'>{Object.keys(cart).length}</span>:<></>}
              </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  
}

