import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "./UserContext";

export default function Header() {


const {setUserInfo,userInfo} = useContext(UserContext);
    useEffect(() => {
      fetch('http://localhost:8000/profile', {
        credentials: 'include',
      }).then(response => {
        response.json().then(userInfo => {
          setUserInfo(userInfo);
        });
      });
    }, []);

    function logout() {
        fetch("http://localhost:8000/logout", {
            credentials: "include",
            method: "POST",
        });
        setUserInfo(null);
    }

    const username = userInfo?.username;
    return (
        <header>
        <Link to = "/" className="logo">MyBlog</Link>
        <nav>
            {username && (
                <>
                <span className="intro">Hello, {username}!</span>
                <Link to="/create" className="createheader"> Create new post</Link>
                <a onClick = {logout} className="logoutheader">Logout</a>
                </>
            )}
            {!username && (
                <>
                <Link to = "/login">Login</Link>
                <Link to = "/register">Register</Link>
                </>
            )}

        </nav>
      </header>
    );
}