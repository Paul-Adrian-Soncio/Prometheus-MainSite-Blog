import React, { Component } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import index from 'Prometheus-MainSite-Blog/Prometheus-Website-main/src/index.js'

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Routes>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Prometheus Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div  id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Route class="nav-link active" aria-current="page" exact path="/" src={index} />
        <a class="nav-link active" aria-current="page" href="#">ABOUT</a>
        <a class="nav-link active" aria-current="page" href="#">SERVICES</a>
        <a class="nav-link active" aria-current="page" href="#">TEAM</a>
        <a class="nav-link active" aria-current="page" href="#">CLIENTS</a>
        <a class="nav-link active" aria-current="page" href="#">ADVISORS</a>
        <a class="nav-link active" aria-current="page" href="#">CONTACT</a>
      </div>
    </div> 
  </div>
</nav>
</Routes>
</BrowserRouter>

      </div>
     
    )
  }
}
