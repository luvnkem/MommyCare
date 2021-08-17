import React from 'react'

export default function Navbar() {

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
  }

    return (
        <nav>

<div id="mySidenav" class="sidenav">
<a href={{javascript:void(0)}} class="closebtn" onclick={closeNav}>&times;</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>

<span style={{fontSize:'30px', cursor:'pointer'}} onClick={openNav}><i class="fa fa-bars" aria-hidden="true"></i></span>




            <div className="nav-item">
            <img className="navLogo" src="\nav bar\Desktop Logo.png" alt="mummycare"/>
            </div>

            <div className="nav-item-three">
            <img src="\nav bar\search.png" alt="search"/>
            <img src="\nav bar\shopping-bag.png" alt="shopping bag"/>
            </div>
            
        </nav>
    )
}
