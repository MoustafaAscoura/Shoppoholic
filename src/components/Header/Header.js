import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCircleHalfStroke, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import LanguageContext from '../../context/LangaugeContext'
import ThemeContext from '../../context/ThemeContext'

export default function Header() {
  const {theme,setTheme} = useContext(ThemeContext)
  const {lang,setLang} = useContext(LanguageContext)

  const changeTheme = (e) => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
    e.target.closest('span').classList.toggle('mirror')
  }
  const changelang = (e) => {
    if (lang === "ar") {
      setLang("en")
    } else {
      setLang("ar")
    }
  }

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
          <Nav className='align-items-center'>
            <NavLink className="nav-link" to="/login">Login</NavLink>
            <NavLink className="nav-link me-2" to="/signup">Sign Up</NavLink>
            <Navbar.Text onClick={e => changeTheme(e)} className="m-0 p-0"><FontAwesomeIcon icon={faCircleHalfStroke}/></Navbar.Text>
            <Navbar.Text onClick={e => changelang(e)} className="ms-2"><FontAwesomeIcon className="ms-2 me-1" icon={faGlobe} />{lang}</Navbar.Text>
            <NavLink className=" ms-2 nav-link position-relative" to="/cart">
              <FontAwesomeIcon icon={faCartShopping} />
              {Object.keys(cart).length ? <span className='bg-danger'>{Object.keys(cart).length}</span>:<></>}
              </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  
}

