import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css/"

 const NavBar = () => { 
  return (
    <header>
      <img src="" alt="" />
      <h1>VMC REFRIGERACION S.A</h1>
        <nav>
            <ul>
                <li>Productos</li>
                <li>Contactos</li>
                <li>Nostros</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar