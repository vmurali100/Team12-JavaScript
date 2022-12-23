import React from 'react'
import {link} from "react-router-dom"



const NavBar = () => {
    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Single Page Application</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <link to="/" class="nav-link">Home</link>
                        </li>
                        <li class="nav-item">
                        <link to="/features" class="nav-link">Features</link>
                         
                        </li>
                        <li class="nav-item">
                        <link to="/pricing" class="nav-link">Pricing</link>
                         
                        </li>
                    
                    </ul>
                </div>
            </div>

        </nav>
        

  );
};

export default NavBar