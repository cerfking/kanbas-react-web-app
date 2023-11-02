import Assignment3 from "./a3";
import {Link, Navigate, Route, Routes} from "react-router-dom";
import Nav from "../Nav";
import Assignment4 from "./a4";
import {Provider} from "react-redux";
import store from "./store";

function Labs() {
    return (
        <Provider store={store}>
            <div>
            {/*<h1>Assignment 3</h1>*/}
            <Nav/>
            <Routes>
                <Route path="/" element={<Navigate to="a3"/>}/>
                <Route path="a3" element={<Assignment3/>}/>
                <Route path="a4" element={<Assignment4/>}/>
            </Routes>

            </div>
        </Provider>
    );
}
export default Labs;