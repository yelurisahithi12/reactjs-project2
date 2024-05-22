import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">Replay</div>
        <div className="spacer"></div>
        <ul className="nav-menu">
          &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  
           
      
          
          <li><a href="https://replay.software/sleeve"><img src="https://replay.software/replay/images/Sleeve@2x.png" alt="Sleeve" /> Sleeve</a></li>
          <li><a href="https://replay.software/umbra"><img src="https://replay.software/replay/images/Umbra@2x.png" alt="Umbra" /> Umbra</a></li>
        </ul>
        <div className="spacer"></div>
        <ul className="nav-links">
        &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
          <li><a href="https://replay.software/updates">Updates</a></li>
          <li><a href="https://replay.software/help/sleeve">Help</a></li>
          <li><a href="https://x.com/softwarereplay">X</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
