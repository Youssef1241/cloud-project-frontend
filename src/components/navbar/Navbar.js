import Navitem from "./Navitem";
const Navbar =()=>{
    return(
        <nav>
            <ul className="bg-sky-900 justify-center items-center">
                <Navitem to="/products">Products</Navitem>
                <Navitem to="/">Orders</Navitem>
                <Navitem to="/">Patient Info</Navitem>
                <Navitem to="/signup">Sign Up/In</Navitem>
            </ul>
        </nav>
    )
}
export default Navbar;