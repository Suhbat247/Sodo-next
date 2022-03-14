import React from "react"
import Link from 'next/link'

const navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link  href="/"><a className="navbar-brand">Mongol</a></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
            <Link  href="/"><a className="nav-link" href="">Home</a></Link>
            </li>
            <li className="nav-item">
            <Link  href="/cart"><a className="nav-link" href="">Cart</a></Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Hereglegch
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Login</a>
                <a className="dropdown-item" href="#">Register</a>
                <a className="dropdown-item" href="#">Settings</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
     );
}
 
export default navbar;