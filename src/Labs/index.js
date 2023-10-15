import Assignment3 from "./a3";
import {Link} from "react-router-dom";
import Nav from "../Nav";

function Labs() {
    return (
        <div>
            {/*<h1>Assignment 3</h1>*/}
            <Nav/>
            <Assignment3></Assignment3>
        </div>
    );
}
export default Labs;