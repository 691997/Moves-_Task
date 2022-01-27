import { Link } from "react-router-dom";
import { FaAlignJustify , FaStar} from "react-icons/fa";
import { useSelector } from "react-redux";

const Nav = () => {
    const fav = useSelector(state => state.fav )
  return (
    <nav className="navbar navbar-expand-lg bg-dark sticky-top ">
        <div className="container-fluid gap-5 ">
            <Link className="navbar-brand" to={"/"}>Movies</Link>
          
            <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                    <li className="nav-item"><Link className="nav-link active" aria-current="page" to={"/"}>Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to={"/login"}>Loin</Link></li>
                    <li className="nav-item"><Link className="nav-link" to={"/register"}>Register</Link></li>
                </ul>
            </div>
            <form className="d-flex search">
                <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-danger s_b " type="submit">Search</button>
                    <Link to="/favoret" ><FaStar className=" star_icon"/></Link>
                    <span className="text-white"> {fav.length} </span>
            </form>
            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <FaAlignJustify className="text-danger navbar-toggler-icon"/>
            </button>
        </div>
    </nav>

  );
};

export default Nav;
