import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({
        username: "", password: "" });
    const navigate = useNavigate();
    const signup = async () => {
        try {
            await client.signup(credentials);
            navigate("/project/account");
        } catch (err) {
            setError(err.response.data.message);
        }
    };
    return (
        <div>
            <h1>Signup</h1>
            {error && <div>{error}</div>}
            <input
                value={credentials.username}
                className={"form-control-sm"}
                onChange={(e) => setCredentials({
                    ...credentials,
                    username: e.target.value })} />
            <br/>
            <br/>
            <input
                value={credentials.password}
                className={"form-control-sm"}
                onChange={(e) => setCredentials({
                    ...credentials,
                    password: e.target.value })} />
            <br/>
            <br/>
            <button
                className={"btn btn-primary"}
                onClick={signup}>
                Signup
            </button>
        </div>
    );
}
export default Signup;