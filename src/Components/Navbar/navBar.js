
import CartWidget from "../CartWidget/cartWidget";
import { Link } from "react-router-dom";
const Navbar = () => {

    return(
    <div className="navbar"> 
<ul>
    <li>
    <Link to={"/"}>Home</Link>
    </li>
    <li>
    <Link to={"/ItemListContainer"}>Productos</Link>
    <ul className="submenu">
    <li>
    <Link to={"/ItemListContainer/Camisetas"}>Camisetas</Link>
    </li>
    <li>
    <Link to={"/ItemListContainer/shorts"}>Shorts</Link>
    </li>
    <li>
    <Link to={"/ItemListContainer/conjuntos"}>Conjuntos</Link>
    </li>
    </ul>
    </li>
    <li>
    <a href="#">Contacto</a>
    </li>
    <li className="Cart">
    <a href="#"><CartWidget/></a>
    </li>
</ul>
    
    </div>)
}
export default Navbar