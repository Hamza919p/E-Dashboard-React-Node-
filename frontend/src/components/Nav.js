import { Link } from "react-router-dom";

const Nav = () => {
    return <div>
        <ul className="nav-ul" >
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/add">Add</Link> </li>
            <li> <Link to="/update">Update</Link> </li>
            <li> <Link to="/logout">Logout</Link> </li>
            <li> <Link to="/profile">Profile</Link> </li>
        </ul>
    </div>
};

export default Nav;