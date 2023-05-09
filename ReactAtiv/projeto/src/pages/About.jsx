import React from "react";
import {Link } from "react-router-dom"

export default function About(){
    return (
        <main>
            <h1>Sobre a empresa</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut mollitia quis aspernatur dicta earum, possimus nulla vitae dolorum hic distinctio repellendus quaerat recusandae voluptas quibusdam, sunt nostrum a totam quisquam.</p>
            
            <Link to="/">Home</Link>
        </main>
    )
}