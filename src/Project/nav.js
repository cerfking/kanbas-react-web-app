import {Link, useLocation} from "react-router-dom";

function Nav() {
    const { pathname } = useLocation();
    return <div className={"list-group lis"}>
        <Link to={`/project`} className={`list-group-item ${pathname.includes(`home`) && "active"}`}>Home</Link>
        <Link to={`/project/signin`} className={`list-group-item ${pathname.includes(`signin`) && "active"}`}>Signin</Link>
        <Link to={`/project/signup`} className={`list-group-item ${pathname.includes(`signup`) && "active"}`}>Signup</Link>

    </div>
}

export default Nav;