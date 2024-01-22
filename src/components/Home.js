import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    const obj = {
        email: "",
        password: ""
    }

    const [loginform, setloginform] = useState(obj);
    console.log("login", loginform)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setloginform({ ...loginform, [name]: value });
    };


    const loginform2 = async (e) => {
        e.preventDefault();
        const loginformobj = { ...loginform };

        await axios
            .post("url______________-_______________", loginformobj)
            .then((res) => {
                console.log("=======", res);
                alert("ok")
            })
            .catch((err) => {
                console.log(err);
            });
        setloginform(obj);

    };

    return (
        <>
            <div class="container mt-5">
                <form>
                    <div class="mb-6">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="text" name="email"
                            value={loginform.email} class="form-control" onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-6">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" name="password" value={loginform.password} onChange={handleChange} class="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" class="btn btn-primary mt-4" onClick={loginform2}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Home
